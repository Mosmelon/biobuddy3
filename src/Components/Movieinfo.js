import '../App.css';
import Movie from '../Api/Movie';
import React, {useContext, useEffect, useState} from 'react';
import { GlobalContext } from './GlobalState';
import ReactDOM from "react-dom";
import { fetchMovies, fetchMovieDetail } from '../getdetail';
import Home from './Homepage';

import axios from 'axios';
import {useParams} from "react-router-dom"
import image1 from '../plus.png';
import { Link } from 'react-router-dom';
import { Wrapper, Content, Text } from './Movieextra';
import Thumb from './Thumb';

import image2 from '../Search.png';
import image3 from '../chat.png';
import image4 from '../user.png';
import star from '../star.png';
//import axios from 'axios';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const IMG_API2 = 'https://image.tmdb.org/t/p/w780';
const FEATURED_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=618a4d3048a1a1f797c014affaf110b4&page=1";
const IMAGE_API = "https://image.tmdb.org/t/p/w1280/";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=618a4d3048a1a1f797c014affaf110b4&query=";
const GENRE_API = "https://api.themoviedb.org/3/genre/movie/list?api_key=618a4d3048a1a1f797c014affaf110b4&language=en-US"
const API_KEY = '618a4d3048a1a1f797c014affaf110b4';
const API_URL = 'https://api.themoviedb.org/3/';
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w780';



const setVoteClass = (vote) => {
    // if(vote>= 8){
    //     return 'green';
    // }
    // else if (vote>=6){
    //     return 'orange';

    // }else{
    //     return 'red';
    // }
}

export const MovieInfo= ({movie}) => {
  const {movieId} = useParams();
  const [Movie, setMovie] = useState([])
  const [Casts, setCasts] = useState([])
  const [CommentLists, setCommentLists] = useState([])
  const [LoadingForMovie, setLoadingForMovie] = useState(true)
  const [LoadingForCasts, setLoadingForCasts] = useState(true)
  const [ActorToggle, setActorToggle] = useState(false)
  const movieVariable = {
      movieId: movieId
  }

  useEffect(() => {

      let endpointForMovieInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      fetchDetailInfo(endpointForMovieInfo)


  }, [])

  const toggleActorView = () => {
      setActorToggle(!ActorToggle)
  }

  const fetchDetailInfo = (endpoint) => {

      fetch(endpoint)
          .then(result => result.json())
          .then(result => {
              console.log(result)
              setMovie(result)
              setLoadingForMovie(false)

              let endpointForCasts = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
              fetch(endpointForCasts)
                  .then(result => result.json())
                  .then(result => {
                      console.log(result)
                      setCasts(result.cast)
                  })

              setLoadingForCasts(false)
          })
          .catch(error => console.error('Error:', error)
          )
  }
  
      
  const {
    addMovieToWatchlist,
    removeMovieFromWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);
  let storedMovie = watchlist.find((o) => o.id === Movie.id);
  let storedMovieWatched = watched.find((o) => o.id === Movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  
  const watchedDisabled = storedMovieWatched ? true : false;
  const Image= IMG_API + '/' + Movie.backdrop_path;

  return(
    <><Wrapper backdrop={Movie.backdrop_path}>
      <Content>
        <Thumb
          image={Movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${Movie.poster_path}`
            : null}
          clickable={false} />
        <Text>
          <h1>{Movie.title}</h1>
          <h3>PLOT</h3>
          <p>{Movie.overview}</p>

          <div className='rating-directors'>
            <div>
              <h3>RATING</h3>
              <div className='score'>{Movie.vote_average}</div>
            </div>
          </div>
          <div className="pushbutton">
                    
            <button
              className="btn"
              disabled={watchlistDisabled} 
              onClick={() => addMovieToWatchlist(Movie)}>
              Add to my list
            </button>
            
              
              <button className="review"> <p>Make a review</p>
                <a href={`/Recomendmovie/${Movie.id}`}><img className= "star" alt="star" src={star} style={{width:"30px", height:"30px"}} /> 
               </a>  
              </button>
              </div>
        </Text>
      </Content>
    </Wrapper>
    <div className="Bar">
        <nav>
          <Link to="/"><img className="homepic1" src={image3} alt="home" /></Link>
          <Link to="/Search"><img className="homepic2" src={image2} alt="search" /></Link>
          <Link to="/MyProfile"><img className="homepic4" src={image4} alt="profile" /></Link>
        </nav>
      </div></>
    


  );

}
export default MovieInfo;