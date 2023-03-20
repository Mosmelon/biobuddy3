
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect, TextInput, form} from 'react';
import {
   FacebookShareButton,
   EmailShareButton,
 } from "react-share";
 import { Link } from 'react-router-dom';
 import image1 from '../plus.png';
 import image2 from '../Search.png';
 import image3 from '../chat.png';
 import image4 from '../user.png';
const FEATURED_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=618a4d3048a1a1f797c014affaf110b4&page=1";
const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=618a4d3048a1a1f797c014affaf110b4&query=";

// console.log(image1);
// console.log(image2);

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
        <h2> Movie review </h2>
      </header>

      <body>
      <div className="textrecomend"> 

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
            <FacebookShareButton style={{ width: '20%', height: '20%' }} quote={"Hejsan, jag har sett den här filmen:  " 
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
  <div className="Bar">
              <nav>
              <Link to="/"><img className="homepic1" src={image3} alt="home" /></Link>
              <Link to="/Search"><img className="homepic2" src={image2} alt="search" /></Link>
              <Link to="/Recomend"> <img className="homepic3" src={image1} alt="chat" /></Link>
              <Link to="/MyProfile"><img className="homepic4" src={image4} alt="profile" /></Link>
              </nav>
          </div>

  </>

  );

}


export default Recomend;