import '../App.css';

import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEnvelope, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Movie from '../Api/Movie';
import  {MovieInfo}  from './Movieinfo';
import { fetchMovies } from '../getdetail';
import ScrollToTop from "react-scroll-to-top";

import image1 from '../plus.png';
import image2 from '../Search.png';
import image3 from '../chat.png';
import image4 from '../user.png';
import logga from '../Logga.png'
import tmdb from '../tmdb.png'

const FEATURED_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=618a4d3048a1a1f797c014affaf110b4&page=1";
const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=618a4d3048a1a1f797c014affaf110b4&query=";
const GENRE_API = "https://api.themoviedb.org/3/genre/movie/list?api_key=618a4d3048a1a1f797c014affaf110b4&language=en-US"
const API_KEY = '618a4d3048a1a1f797c014affaf110b4';
const API_URL = 'https://api.themoviedb.org/3/';
export default function Home() {
  const buttonRef = useRef(null);

  const [ movies, setMovies, setState] = useState([]);
  const [searchTerm, setSearchTerm]= useState('');
  const [question, setQuestion] = useState(false);

  const [favourites, setFavourites] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null)
  const [Loading, setLoading] = useState(true)
  const [CurrentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(endpoint)
}, [])

const fetchMovies = (endpoint) => {

  fetch(endpoint)
      .then(result => result.json())
      .then(result => {
          setMovies([...movies, ...result.results])
          setMainMovieImage(MainMovieImage || result.results[0])
          setCurrentPage(result.page)
      }, setLoading(false))
      .catch(error => console.error('Error:', error)
      )
}


const loadMoreItems = () => {
  let endpoint = '';
  setLoading(true)
  console.log('CurrentPage', CurrentPage)
  endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
  fetchMovies(endpoint);

}
// const questionOnChange = () => {

//  setQuestion( DEL1 + "\n\n" + DEL2 + "\n\n\n" + DEL3 + "\n" + DEL4);
// }
// const DEL1 = "Here you can search for movies and then save them in your list. You can also review movies and share them with family and friends via email or Facebook. On the home page, you can be inspired by the most popular movies right now. Click on a specific movie to get more information about it. There are two more icons here. Click on the star icon to recommend and review the movie to friends and family. Click the list icon to add the movie to your list. If you click on the magnifying glass in the menu bar, you will come to the search page where you can search for a movie using the movie title. Click on the movie to get more information about it, add it to your list or review it. From the user icon in the menu bar, you can reach your profile. Here you can access your list of saved movies. ";
//  const DEL2 = "Now you have everything you need to plan all movie nights in the future! Do not forget the popcorn! ";
//  const DEL3 = "EVERY TIME I GO TO A MOVIE, IT'S MAGIC, NO MATTER WHAT THE MOVIE'S ABOUT.";
//  const DEL4 = "- Steven Spielberg";

const Text =() => <div> <br></br> Welcome to BIO BUDDY! <br></br><br></br>

Here you can search for movies and then save them in your list. You can also review movies and share them with family and friends via email or Facebook.
<br></br>
On the home page, you can be inspired by the most popular movies right now. 
Click on a specific movie to get more information about it. There are two more icons here. Click on the star icon to recommend and review the movie to friends and family. Click the list icon to add the movie to your list.
<br></br>
If you click on the magnifying glass in the menu bar, you will come to the search page where you can search for a movie using the movie title. Click on the movie to get more information about it, add it to your list or review it.
<br></br>
From the user icon in the menu bar, you can reach your profile. Here you can access your list of saved movies.
<br></br>
Now you have everything you need to plan all movie nights in the future! Do not forget the popcorn!
<br></br><br></br>

"EVERY TIME I GO TO A MOVIE, IT'S MAGIC, NO MATTER WHAT THE MOVIE'S ABOUT."<br></br>
- Steven Spielberg <br></br> _________________________________________________
  </div>;
  return(

    <>
    <div className="movie-container">

    <div className= "extra">
        
    <button className="info" onClick={() => setQuestion(!question) }>
      {question ? <FontAwesomeIcon className="Questionmark" icon={faQuestionCircle} color="yellow"/> : <FontAwesomeIcon className="Questionmark" icon={faQuestionCircle} color="yellow"/>}
      </button>

      <div className="question">
        {question ? <Text/> : null}
      </div>
       <img className="loggan" src={logga} alt="loggan"></img>

     <div className="extraa">

     </div>
       
    </div>
         {movies.length > 0 && movies.map((movie) => <React.Fragment key={movie.id}><Movie movie={movie}/></React.Fragment>
          )}
                          {Loading &&
                    <div>Loading...</div>}

                <br />
              

       

      </div>
      <div className= "extra">
      <div style={{ display: 'flex', justifyContent: 'center', height:'50px', width: '800px' }}>
                    <button ref={buttonRef} className="loadMore" onClick={loadMoreItems}>Load More</button>
                </div>
      </div>
      <img style={{width:"80px", height:"50px", marginBottom: '90px', marginLeft: '10px'}} src={tmdb} alt="tmdb"/>
      <ScrollToTop style={{marginBottom:'30px'}} smooth color="#000000" />
      
      <div className="Bar">
              <nav>
              <Link to="/"><img className="homepic1" src={image3} alt="plus" /></Link>
              <Link to="/Search"><img className="homepic2" src={image2} alt="search" /></Link>
              <Link to="/MyProfile"><img className="homepic4" src={image4} alt="profile" /></Link>
              </nav>
          </div></>

  );

}

