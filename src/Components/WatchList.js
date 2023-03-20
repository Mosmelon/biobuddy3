


import "../Css/Prof.css";
import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Movie from "../Api/Movie";
import { MovieCard } from "./MovieCard";
import { GlobalContext } from "./GlobalState";
import image1 from '../Home.png';
import image2 from '../Search.png';
import image3 from '../chat.png';
import image4 from '../user.png';
import { MovieInfo } from "./Movieinfo";
//import image from './IMG_6793.jpeg';

const API_KEY = '618a4d3048a1a1f797c014affaf110b4';
const API_URL = 'https://api.themoviedb.org/3/';
const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
 //console.log(watchlist)
 //console.log(JSON.parse(localStorage.getItem("watchlist")))
  return (
    <><div className="movie-page">
          <div className="container">
              <div className="header">
                  <h1 className="heading">My List</h1>

                  <span className="count-pill">
                      {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
                  </span>
              </div>

              {watchlist.length > 0 ? (
                  <div className="movie-grid">
                      {watchlist.map((movie) => (
                          <MovieCard movie={movie} key={movie.id} type="watchlist" />
                      ))}
                  </div>
              ) : (
                  <h2 className="no-movies">No movies in your list! Add some!</h2>
              )}
          </div>
      </div><div className="Bar">
              <nav>
                  <Link to="/"><img className="homepic1" src={image3} alt="home" /></Link>
                  <Link to="/Search"><img className="homepic2" src={image2} alt="search" /></Link>
                  <Link to="/MyProfile"><img className="homepic4" src={image4} alt="profile" /></Link>
              </nav>
          </div></>
  );
};