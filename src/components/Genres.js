import React, { useState } from 'react';
import genres from '../components/genres.css';
import Action from '../Images/Action.png';
import Drama from '../Images/Drama.png';
import Fantacy from '../Images/Fantacy.png';
import Romance from '../Images/Romance.png';
import Horror from '../Images/Horror.png';
import Music from '../Images/Music.png';
import Thriller from '../Images/Thriller.png';
import Fiction from '../Images/Fiction.png';
import Western from '../Images/Western.png';
import 'font-awesome/css/font-awesome.css';
import { useNavigate } from 'react-router-dom';

export default function Genres() {
  const navigate=useNavigate()
  const genresArr = [
    Action,
    Drama,
    Romance,
    Thriller,
    Western,
    Horror,
    Fantacy,
    Fiction,
    Music
  ];

  

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genreErr, setGenreErr] = useState('');
  const [genreBorderColors, setGenreBorderColors] = useState(
    new Array(genresArr.length).fill('white')
  );
  const updatedSelectedGenres = [...selectedGenres];
    const updatedGenreBorderColors = [...genreBorderColors];
  function handleGenres(index) {
  

    if (updatedSelectedGenres.includes(index)) {
      // Deselect the genre
      const selectedIndex = updatedSelectedGenres.indexOf(index);
      updatedSelectedGenres.splice(selectedIndex, 1);
      updatedGenreBorderColors[index] = 'white';
    } else {
      // Select the genre
      updatedSelectedGenres.push(index);
      updatedGenreBorderColors[index] = 'red';
    }

    setSelectedGenres(updatedSelectedGenres);
    setGenreBorderColors(updatedGenreBorderColors);
  }

  function handleNext() {
    if (selectedGenres.length >= 3) {
      setGenreErr('');
     

      // const selectedGenreIds =updatedSelectedGenres.map((item) => genre_obj[genresArr[item].substring(14).split('.')[0]]);

      localStorage.setItem('Genres', JSON.stringify(selectedGenres));
      navigate('/updatedProfile')
    } else {
      setGenreErr('Minimum 3 categories required');
    }
  }

  function removeGenres(index) {
    const updatedSelectedGenres = selectedGenres.filter((genre) => genre !== index);
    const updatedGenreBorderColors = [...genreBorderColors];
    updatedGenreBorderColors[index] = 'white';

    setSelectedGenres(updatedSelectedGenres);
    setGenreBorderColors(updatedGenreBorderColors);
  }

  return (
    <>
      <div className="container-fluid cont">
        <div className="row">
          <div className="col-md-5 left-genres">
            <p>Super app</p>
            <span>Choose your entertainment category</span>
            <ul style={{ display: 'flex' }}>
              {selectedGenres.map((index, item) => (
                <li key={index}>
                  {genresArr[index].substring(14).split('.')[0]}
                  <i
                    className="fa fa-times"
                    onClick={() => removeGenres(index)}
                    style={{ padding: '7px' }}
                    aria-hidden="true"
                  ></i>
                </li>
              ))}
            </ul>
            <div className="genres-err">{genreErr}</div>
          </div>
          <div className="col-md-7" style={{ marginTop: '30px' }}>
            <div className="row">
              {genresArr.map((item, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <img
                      src={item}
                      style={{
                        height: '180px',
                        width: '190px',
                        margin: '15px',
                        border: `4px solid ${genreBorderColors[index]}`,
                        borderRadius: '15px'
                      }}
                      className="card-img-top"
                      alt=""
                      onClick={() => handleGenres(index)}
                    />
                  </div>
                );
              })}
            </div>
            <button className="btn btn-success btn-next" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
