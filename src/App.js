import logo from './logo.svg';
//import './App.css';
import React, {useEffect, useState} from 'react';
import {getmovie, getpopular} from './Api/api';
import {Search} from './Components/Search';
import {MyProfile} from "./Components/Myprofile";
import { Watchlist } from './Components/WatchList';
import Home from './Components/Homepage';
import { MovieInfo } from './Components/Movieinfo';
import Movie from './Api/Movie';
import Recomend from './Components/Recomend';
import Recomendspec from './Components/Recomendspec';
import { GlobalProvider } from './Components/GlobalState';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";




export default function App() {
  


   return (
   
    <GlobalProvider>
        <Router>
           <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/Recomend" element={<Recomend/>}/>
             <Route path="/Recomendmovie/:movieId" element={<Recomendspec/>}/>
             <Route path="/MyProfile" element={<MyProfile />} />
             <Route path="/Search" element={<Search />} />
             <Route path="/mylist" element={<Watchlist />} />
             <Route path="/movieinfo/:movieId" element={<MovieInfo/>}/>


           </Routes>
       </Router>
       </GlobalProvider>
        

   );




}



// export default App;
