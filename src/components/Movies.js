import React, { useEffect, useState } from 'react';
import logo from "../Images/logo.png";
import { Navigate, useNavigate } from 'react-router-dom';
import './movies.css';

export default function Movies() {
  const [movieData, setMovieData] = useState([]);
  const navigate=useNavigate()
  const obj=localStorage.getItem('genre_obj');
  const genreObj = JSON.parse(obj);

 
  function getKeyByValue(object, value) {
    for (const key in object) {
      if (object[key] === value) {
        return key; // Return the key when a match is found
      }
    }
    return null; // Return null if no match is found
  }
  const backToProfile=()=>{
    navigate('/updatedProfile')
  }

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2d4c4fce93msh9f37dd090a7e714p1fc425jsn01f56084791a',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };
    
    const fetchMovies = async () => {
      try {
        const groupedMovies = {};

        for (const genreId of Object.keys(genreObj)) {
          const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${genreId}&year=2020`, options);
          const result = await response.json();
          // Take the first 4 movies for each genre
          const moviesForGenre = result.results.slice(0, 4);
          groupedMovies[genreId] = moviesForGenre;
          // console.log(groupedMovies)
        }

        setMovieData(groupedMovies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
   
  <div className="container-fluid" style={{position:'relative'}}>
    <p style={{color:'#72DB73', position:'absolute',left:'0px',top:'1px',fontSize:'30px'}}>
      Super App
    </p>
    <img src={logo} onClick={backToProfile} style={{height:'50px',width:'50px',position:'absolute' , right:'0px', top:'1px' }}/>
  </div>
  <br></br><br></br>
  <div className='heading' style={{color:'white',marginLeft:'40px',fontSize:'25px'}}>
  Entertainment according to your choice
  </div>
  <br></br>

      <div className="container" style={{marginTop:'10px'}}>
        {Object.keys(movieData).map((genreId, index) => (
          <div key={index}>
            <p style={{color:'#878787',fontWeight:'bold'}}>{getKeyByValue(genreObj,genreObj[genreId])}</p>
            <div className='row'>
              {movieData && movieData[genreId].map((movie, idx) => (
                <div className='col-md-3' key={idx} style={{marginBottom:'150px'}}>
                  
                  <img
                    style={{ height: '150px',width:'200px'}}
                    src={movie?.primaryImage?.url}
                    alt={`no-image`}
                    className="movie-image"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
