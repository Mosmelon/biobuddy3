import image1 from './five-stars.png';
import image2 from './add-img.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect, TextInput, form} from 'react';
import {
   FacebookShareButton,
   EmailShareButton,
 } from "react-share";

const FEATURED_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=618a4d3048a1a1f797c014affaf110b4&page=1";
const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=618a4d3048a1a1f797c014affaf110b4&query=";

console.log(image1);
console.log(image2);

function Recomend() {

   const [rating, setRating] = useState(2) 
   const [search, setSearch] = useState("");
   const [description, setDescription] = useState("");

   const searchOnChange = (e) => {
      setSearch(e.target.value);
    }

    const describeOnChange = (e) => {
      setDescription(e.target.value);
    }
 

  return (
   <>
  <div className="App">
      
      <div classname="App-content">
      
      <header className="App-header">
        <h2> Recomend a movie </h2>
      </header>

      <body>
      <div className="text"> 

        <p> Movie: </p>

        <input className="Search" placeholder="Add the movie title..." value={search} onChange={searchOnChange}/>

        <p> Rate: </p>

         <div className="star">
            <FontAwesomeIcon icon={faStar} color={rating>0 ? "yellow": "grey"} onClick={()=> setRating(1)}/>
            <FontAwesomeIcon icon={faStar} color={rating>1 ? "yellow": "grey"} onClick={()=> setRating(2)}/>
            <FontAwesomeIcon icon={faStar} color={rating>2 ? "yellow": "grey"} onClick={()=> setRating(3)}/>
            <FontAwesomeIcon icon={faStar} color={rating>3 ? "yellow": "grey"} onClick={()=> setRating(4)}/>
            <FontAwesomeIcon icon={faStar} color={rating>4 ? "yellow": "grey"} onClick={()=> setRating(5)}/>
         </div>

        <p> Give your thoughts on this movie: </p>

        <textArea className="Description" placeholder="Add a description..." value={description} onChange={describeOnChange}/>

         <h1>share this recomendation:</h1>


      <div className="share">
         <div className="shareFacebook">
            <FacebookShareButton quote={"Hejsan, jag har sett den här filmen:  " 
            +  search + "\n\n" 
            + "betyg: " + rating + "/5 stjärnor" + "\n\n" 
            + "Beskrivning: " + description + "\n\n" + "Gör din rekomendation du också men appen BioBuddy:"}

            url={"https://github.com/Mosmelon/Projekt-bb/blob/master/src/App.js"}>
               <FontAwesomeIcon icon={faFacebookSquare} color={"grey"}></FontAwesomeIcon> </FacebookShareButton>
         </div>

         
         <div className="shareEmail">
            <EmailShareButton subject={"Filmrekommendation"} 
            body={"Hejsan, jag har sett den här filmen:  " 
            +  search + "\n\n" 
            + "betyg: " + rating + "/5 stjärnor" + "\n\n" 
            + "Beskrivning: " + description + "\n\n" + "Gör din rekomendation du också men appen BioBuddy:"}
            separator={"\n"}
            url={"https://github.com/Mosmelon/Projekt-bb/blob/master/src/App.js"}> 
            <FontAwesomeIcon icon={faEnvelope} color={"grey"}></FontAwesomeIcon> </EmailShareButton>
         </div>
    </div>


      </div>   
      </body>
    </div>
  </div>

  </>

  );

}


export default Recomend;