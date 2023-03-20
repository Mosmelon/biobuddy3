import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import  Movie  from '../Api/Movie';

import image1 from '../plus.png';
import image2 from '../Search.png';
import image3 from '../chat.png';
import image4 from '../user.png';



const FEATURED_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=618a4d3048a1a1f797c014affaf110b4&page=1";
const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=618a4d3048a1a1f797c014affaf110b4&query=";
const GENRE_API = "https://api.themoviedb.org/3/genre/movie/list?api_key=618a4d3048a1a1f797c014affaf110b4&language=en-US"




export const Search=()=> {

  const [ movies, setMovies, setState] = useState([]);
  const [searchTerm, setSearchTerm]= useState('');
  
  useEffect(() =>{
    getMovies(FEATURED_API);
  
  },[]);

    const getMovies = (API) => {
      fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
    }

  const handleOnChange = (e) => {
    
    e.preventDefault();
    setSearchTerm(e.target.value);


      fetch(`https://api.themoviedb.org/3/search/movie?api_key=618a4d3048a1a1f797c014affaf110b4&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if(!data.errors){
          setMovies(data.results);
        }else{
          setMovies('');
        }
        console.log(data);
      });
   
    }

  return(

        // kolla upp när man bara trycker enter utan någon text.
      <><header>
          
              <input className="search" type="search" placeholder= "Search for movietitle..." value={searchTerm} onChange={handleOnChange} />
        
      </header>
      <div className="movie-container">

      {movies.length > 0 && movies.map((movie) => <React.Fragment key={movie.id}><Movie movie={movie}/></React.Fragment>
          )}

          </div>

          <div className= "extra">
        
        </div>
        
          <div className="Bar">
              <nav>
              <Link to="/"><img className="homepic1" src={image3} alt="home" /></Link>
              <Link to="/Search"><img className="homepic2" src={image2} alt="search" /></Link>
              
              <Link to="/MyProfile"><img className="homepic4" src={image4} alt="profile" /></Link>
              </nav>

          </div></>

  );

}
