package controller

import (
	"encoding/json"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"omahihrom/database"
	"omahihrom/helper"
	"omahihrom/model"
	"omahihrom/respond"
	"strconv"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gorilla/mux"
)

func AddProduct(w http.ResponseWriter, req *http.Request) {

	userInfo := req.Context().Value("userInfo").(jwt.MapClaims)

	req.ParseMultipartForm(32 << 20)

	formdata := req.MultipartForm
	files := formdata.File["file_uploads"]
	price := req.FormValue("price")
	name := req.Form.Get("name")
	userId := int(userInfo["UserId"].(float64))
	convertedPrice, err := strconv.Atoi(price)

	if err != nil { 		
		respond.RespondWithError(w, http.StatusBadRequest, err.Error()) 		
		return
	}

	product := model.Product{Name: name, UserId: userId, Price: convertedPrice}
	err = product.AddProduct(database.DB)

	for i, _ := range files {

		file, err := files[i].Open()

		defer file.Close()

		if err != nil { 		
			respond.RespondWithError(w, http.StatusBadRequest, err.Error()) 		
			return
		}

		mimeType := files[i].Header.Get("Content-Type")
		err = helper.CheckMimeType(mimeType)
		if err != nil { 		
			respond.RespondWithError(w, http.StatusBadRequest, err.Error()) 		
			return
		}

		extension := filepath.Ext(files[i].Filename)
		unixTimeStamp := int32(time.Now().Unix())
		imgUrl := "/images/" + helper.ConvertToString(unixTimeStamp) + extension
		image := model.Image{Url: imgUrl, ProductId: product.Id}

		err = image.AddImage(database.DB)
		if err != nil { 		
			respond.RespondWithError(w, http.StatusBadRequest, err.Error()) 		
			return
		}

		imgPath := "." + imgUrl
		out, err := os.Create(imgPath)

		defer out.Close()
		if err != nil { 		
			respond.RespondWithError(w, http.StatusBadRequest, err.Error()) 		
			return
		}

		_, err = io.Copy(out, file)

		if err != nil { 		
			respond.RespondWithError(w, http.StatusBadRequest, err.Error()) 		
			return
		}
	}

	err = product.GetProduct(database.DB)
	if err != nil { 		
		respond.RespondWithError(w, http.StatusBadRequest, err.Error()) 		
		return 	
	}
	respond.RespondWithJSON(w, http.StatusOK, product)

}

func DeleteProduct(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])

	if err != nil { 		
		respond.RespondWithError(w, http.StatusBadRequest, err.Error()) 		
		return
	}

	p := model.Product{Id: id}
	err = p.DeleteProduct(database.DB)

	if err != nil { 		
		respond.RespondWithError(w, http.StatusBadRequest, err.Error()) 		
		return 	
	}

	respond.RespondWithJSON(w, http.StatusOK, p)

}

func UpdateProduct(w http.ResponseWriter, r *http.Request) {
	userInfo := r.Context().Value("userInfo").(jwt.MapClaims)
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])

	if err != nil { 		
		respond.RespondWithError(w, http.StatusBadRequest, err.Error()) 		
		return
	}
	p := model.Product{Id: id}
	json.NewDecoder(r.Body).Decode(&p)
	p.UserId = int(userInfo["UserId"].(float64))

	err = p.UpdateProduct(database.DB)
	if err != nil { 		
		respond.RespondWithError(w, http.StatusBadRequest, err.Error()) 		
		return
	}

	respond.RespondWithJSON(w, http.StatusOK, p)
}

func GetAllProduct(w http.ResponseWriter, r *http.Request) {
	products, err := model.GetAllProduct(database.DB)

	if err != nil { 		
		respond.RespondWithError(w, http.StatusBadRequest, err.Error()) 		
		return
	}

	respond.RespondWithJSON(w, http.StatusOK, products)
}

func GetProduct(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])

	if err != nil { 		
		respond.RespondWithError(w, http.StatusBadRequest, err.Error()) 		
		return
	}

	p := model.Product{Id: id}
	err = p.GetProduct(database.DB)

	if err != nil { 		
		respond.RespondWithError(w, http.StatusBadRequest, err.Error()) 		
		return 
	}

	respond.RespondWithJSON(w, http.StatusOK, p)
}
