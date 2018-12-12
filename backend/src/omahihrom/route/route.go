package route

import (
	"net/http"
	"omahihrom/controller"
	"omahihrom/middleware"

	"github.com/gorilla/mux"
)

var BaseRouter *mux.Router

const STATIC_DIR = "/static/"

func init() {
	BaseRouter = mux.NewRouter()

	Router := BaseRouter.PathPrefix("/api").Subrouter()
	Router.Handle("/image/{rest}", http.StripPrefix("/api/image/", http.FileServer(http.Dir("images/"))))
	Router.HandleFunc("/user/product/{id:[0-9]+}", middleware.ValidateMiddleware(controller.GetUserProduct)).Methods("GET")
	Router.HandleFunc("/user/{id:[0-9]+}", controller.UpdateUser).Methods("PUT")
	Router.HandleFunc("/users", controller.AddUser).Methods("POST")
	Router.HandleFunc("/products/{id:[0-9]+}", controller.GetProduct).Methods("GET")
	Router.HandleFunc("/products/{id:[0-9]+}", middleware.ValidateMiddleware(controller.UpdateProduct)).Methods("PUT")
	Router.HandleFunc("/products", controller.GetAllProduct).Methods("GET")
	Router.HandleFunc("/products/{id:[0-9]+}", middleware.ValidateMiddleware(controller.DeleteProduct)).Methods("DELETE")
	Router.HandleFunc("/products", middleware.ValidateMiddleware(controller.AddProduct)).Methods("POST")
	Router.HandleFunc("/userinfo", middleware.ValidateMiddleware(controller.GetUserLogin)).Methods("GET")
	Router.HandleFunc("/login", controller.Login).Methods("POST")
	Router.HandleFunc("/", controller.HomePage).Methods("GET")
}
