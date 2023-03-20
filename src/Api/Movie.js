import React, {useContext, useState, useEffect} from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import {MovieInfo} from '../Components/Movieinfo';
import Home from '../Components/Homepage';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { GlobalContext } from '../Components/GlobalState';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const FEATURED_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=618a4d3048a1a1f797c014affaf110b4&page=1";
const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=618a4d3048a1a1f797c014affaf110b4&query=";
const GENRE_API = "https://api.themoviedb.org/3/genre/movie/list?api_key=618a4d3048a1a1f797c014affaf110b4&language=en-US"

const API_KEY = '618a4d3048a1a1f797c014affaf110b4';
const API_URL = 'https://api.themoviedb.org/3/';

const setVoteClass = (vote) => {
    if(vote>= 8){
        return 'green';
    }
    else if (vote>=6){
        return 'orange';

    }else{
        return 'red';
    }
}

const click = event => {
   
    console.log(event.target.value);
  };

const Movie =({movie}) => {


        return(
            <> 
           
            <div className="movie">
             
                <img src={IMG_API + movie.poster_path} alt={movie.title} />
                <div className="movie-info">
                
                <a href={`/movieinfo/${movie.id}`}> <h3>{movie.title}</h3></a>
                
                </div>
             

            </div>

            
           </>
        
        );
      }
      export default Movie;

