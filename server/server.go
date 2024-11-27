package main

import "net/http"

func initServer() {
	mux := http.NewServeMux()
	mux.HandleFunc("/containers", func(w http.ResponseWriter, r *http.Request) {
}