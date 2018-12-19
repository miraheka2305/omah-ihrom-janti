package controller

import (
	"fmt"
	"io"
	"net/http"
	"omahihrom/database"
	"omahihrom/helper"
	"omahihrom/model"
	"omahihrom/respond"
	"os"
	"path/filepath"
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
	description := req.Form.Get("description")
	userId := int(userInfo["UserId"].(float64))
	convertedPrice, err := strconv.Atoi(price)

	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	product := model.Product{Name: name, UserId: userId, Price: convertedPrice, Description: description}
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
		imgUrl := "/image/" + helper.ConvertToString(unixTimeStamp) + extension
		// image := model.Image{Url: "https://www.omahihromjanti.com/api" + imgUrl, ProductId: product.Id}
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

	err = p.GetProduct(database.DB)
	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	fmt.Println("." + p.Images[0].Url)

	err = os.Remove("." + p.Images[0].Url)

	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	err = p.DeleteProduct(database.DB)

	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	respond.RespondWithJSON(w, http.StatusOK, p)

}

func UpdateProduct(w http.ResponseWriter, req *http.Request) {
	userInfo := req.Context().Value("userInfo").(jwt.MapClaims)

	req.ParseMultipartForm(32 << 20)

	vars := mux.Vars(req)
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

	err = os.Remove("." + p.Images[0].Url)

	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	image := model.Image{Id: p.Images[0].Id}
	image.DeleteImage(database.DB)

	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	formdata := req.MultipartForm
	files := formdata.File["file_uploads"]
	price := req.FormValue("price")
	name := req.Form.Get("name")
	description := req.Form.Get("description")
	userId := int(userInfo["UserId"].(float64))
	convertedPrice, err := strconv.Atoi(price)

	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	product := model.Product{Id: id, Name: name, UserId: userId, Price: convertedPrice, Description: description}

	err = product.UpdateProduct(database.DB)

	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

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
		imgUrl := "/image/" + helper.ConvertToString(unixTimeStamp) + extension
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
