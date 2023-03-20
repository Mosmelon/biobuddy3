import React from "react";
import { MovieControls } from "./MovieControls";
import Movie from "../Api/Movie";

import { GlobalContext } from "./GlobalState";
import { useState, useEffect, useParams, useContext } from "react";
const API_KEY = '618a4d3048a1a1f797c014affaf110b4';
const API_URL = 'https://api.themoviedb.org/3/';
const IMG_API = "https://image.tmdb.org/t/p/w1280";


export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
         <a href={`/movieinfo/${movie.id}`}></a>
      <div className="overlay"></div>

     
        <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      /> 
      <MovieControls type={type} movie={movie} />
    </div>
  );
};