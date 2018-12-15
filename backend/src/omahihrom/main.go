package main

import (
	"log"
	"net/http"
	"omahihrom/route"

	"github.com/gorilla/handlers"
)

func main() {
	// headersOk := handlers.AllowedHeaders([]string{"Access-Control-Allow-Origin", "Content-Type", "Access-Control-Allow-Headers", "Authorization", "X-Requested-With", "Access-Control-Request-Method", "Origin"})
	headersOk := handlers.AllowedHeaders([]string{"Access-Control-Allow-Origin", "Content-Type", "Content-Length", "Accept-Encoding", "Authorization", "X-CSRF-Token", "Access-Control-Allow-Headers"})

	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})
	log.Fatal(http.ListenAndServe(":8000", handlers.CORS(originsOk, headersOk, methodsOk)(route.BaseRouter)))
}
