
import "../Css/Prof.css";
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Movie from "../Api/Movie";
import {MovieInfo} from "./Movieinfo";
import { GlobalContext } from "./GlobalState";
import image1 from '../Home.png';
import image2 from '../Search.png';
import image3 from '../chat.png';
import image4 from '../user.png';
import mylist from '../mylist.png';

//import image from './IMG_6793.jpeg';

const API_KEY = '618a4d3048a1a1f797c014affaf110b4';
const API_URL = 'https://api.themoviedb.org/3/';
const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

//==================  PROFIL SIDA ====================

const click = event => {
   
  console.log();
};

const MyProfile = () =>{

  return (

    <><div className="Containers">
      <header className="Headers">

        <h6> My Profile </h6>
      </header>

      <div className="ProfilePicture">
          <img className="img" src={image4} alt="image" width="200" hight="200" />

      </div>
      <div className="Informations">



        <h2> First name <br></br> Last name </h2>



        <button onClick={click} className="buttonList">
          <Link to="/mylist"><img className="mylistbuttom" style={{width:'190px', height:'100px'}} src={mylist} alt="mylist"></img> </Link>
        </button>

      </div>


    </div><div className="Bar">
        <nav>
          <Link to="/"><img className="homepic1" src={image3} alt="home" /></Link>
          <Link to="/Search"><img className="homepic2" src={image2} alt="search" /></Link>
          <Link to="/MyProfile"><img className="homepic4" src={image4} alt="profile" /></Link>
        </nav>
      </div></>
  );



}
export{MyProfile } ;