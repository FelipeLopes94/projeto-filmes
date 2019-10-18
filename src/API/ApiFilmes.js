import React from "react";
import axios from "axios";

const resultAPI = () => {
  let filmes = null;

  axios.get(`https://swapi.co/api/films/`).then(res => {
    filmes = res.data.results;
    console.log("Lista de filmes", filmes);
  });
  return filmes;
};

export const API = resultAPI;
