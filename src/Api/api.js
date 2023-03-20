const getmovie = async (movieid) =>  {
    try {
     
        
      const response = await window.fetch('https://api.themoviedb.org/3/movie/'+movieid+'?api_key=618a4d3048a1a1f797c014affaf110b4');
      const movie = await response.json(); 
    
      return movie;

    } catch (error) {
      console.error(error);
    }
}

const getpopular = async () =>  {
    try {
     
        
        // const response = await window.fetch('https://api.themoviedb.org/3/movie/popular?api_key=618a4d3048a1a1f797c014affaf110b4&language=en-US&page=1');
        // const movie = await response.json();

       const response = await window.fetch('https://api.themoviedb.org/3/configuration?api_key=618a4d3048a1a1f797c014affaf110b4');
       const movie = await response.json();
        
      return movie;

    } catch (error) {
      console.error(error);
    }
}

   

  export {getmovie, getpopular};


  //"https://api.themoviedb.org/3/movie/popular/eBGKU0ZLJmxtVtzESTB1mfllX1J.jpg?api_key=618a4d3048a1a1f797c014affaf110b4"

  //https://api.themoviedb.org/3/movie/505/images?api_key=618a4d3048a1a1f797c014affaf110b4&language=en-US


        
      //https://api.themoviedb.org/3/movie/505/images?api_key=618a4d3048a1a1f797c014affaf110b4&language=en-US