package main

import (
	"log"
	"net/http"
	"omahihrom/route"

	"github.com/rs/cors"
	// "github.com/gorilla/handlers"
)

func main() {
		c := cors.New(cors.Options{
		AllowedHeaders: []string{"Content-Type", "Content-Length", "Accept-Encoding", "Authorization", "X-CSRF-Token", "Access-Control-Allow-Headers", "Content-Disposition", "Depth", "User-Agent", "X-File-Size", "X-Requested-With", "If-Modified-Since", "X-File-Name", "Cache-Control", "Access-Control-Allow-Headers", "Authorization", "X-Requested-With", "Access-Control-Request-Method", "Origin", "Accept"},
		AllowedOrigins: []string{"*"},                                               // All origins
		AllowedMethods: []string{"GET", "HEAD", "POST", "PUT", "DELETE", "OPTIONS"}, // Allowing only get, just an example
	})

	handler := c.Handler(route.BaseRouter)

	log.Fatal(http.ListenAndServe(":8000", handler))
}
