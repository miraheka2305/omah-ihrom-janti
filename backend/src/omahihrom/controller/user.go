package controller

import (
	"encoding/json"
	"fmt"
	"net/http"
	"omahihrom/database"
	"omahihrom/model"
	"omahihrom/respond"
	"strconv"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gorilla/mux"
)

func GetUserLogin(w http.ResponseWriter, r *http.Request) {
	userInfo := r.Context().Value("userInfo").(jwt.MapClaims)
	respond.RespondWithJSON(w, http.StatusOK, userInfo)
}

func ReadUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}
	u := model.User{Id: id}
	err = u.GetUser(database.DB)
	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}
	respond.RespondWithJSON(w, http.StatusOK, u)
}

func Login(w http.ResponseWriter, req *http.Request) {
	var user model.User
	decoder := json.NewDecoder(req.Body)
	err := decoder.Decode(&user)
	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}
	err = user.Login(database.DB)
	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}
	claims := model.Claims{
		StandardClaims: jwt.StandardClaims{
			Issuer:    "Omah Ihrom Janti Claims",
			ExpiresAt: time.Now().Add(time.Duration(3) * time.Hour).Unix(),
		},
		Username: user.Username,
		UserId:   user.Id,
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, _ := token.SignedString([]byte("omahihromjantisupersecretboy"))
	userLogin := model.UserLogin{Username: user.Username, Name: user.Name, Token: tokenString}
	respond.RespondWithJSON(w, http.StatusOK, userLogin)
}

func ReadUsers(w http.ResponseWriter, r *http.Request) {
	users, err := model.GetUsers(database.DB)
	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}
	respond.RespondWithJSON(w, http.StatusOK, users)
}

func DeleteUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	u := model.User{Id: id}
	err = u.DeleteUser(database.DB)
	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}
	respond.RespondWithJSON(w, http.StatusOK, "User deleted")
}

func UpdateUser(w http.ResponseWriter, r *http.Request) {

	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	var u model.User
	decoder := json.NewDecoder(r.Body)
	err = decoder.Decode(&u)
	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	u.Id = id
	err = u.UpdateUser(database.DB)
	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	respond.RespondWithJSON(w, http.StatusOK, u)

}

func AddUser(w http.ResponseWriter, r *http.Request) {
	var u model.User
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&u)
	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	defer r.Body.Close()
	err = u.AddUser(database.DB)
	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	respond.RespondWithJSON(w, http.StatusOK, u)
}

func GetUserProduct(w http.ResponseWriter, r *http.Request) {
	fmt.Println("User Product")
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	u := model.User{Id: id}
	err = u.GetUserProduct(database.DB)
	if err != nil {
		respond.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	respond.RespondWithJSON(w, http.StatusOK, u)

}

func HomePage(w http.ResponseWriter, r *http.Request) {
	respond.RespondWithJSON(w, http.StatusOK, "Hello World")
}
