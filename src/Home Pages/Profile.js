import React from "react";
import profile from "./profile.css";
import cartoon from "../Images/cartoon.png";
import Wheather from "./Wheather";
import News from "./News";
export default function Profile() {
  const data = JSON.parse(localStorage.getItem("userData"));
  let obj= localStorage.getItem("genre_obj");
  // console.log(obj)
  const genres=JSON.parse(obj);
  // console.log(genres['Action'])
  const selectedGenres=Object.keys(genres)
  // console.log(selectedGenres)

  // console.log(selectedGenres.split(',')[0])
  const updatedSelectedGenres = selectedGenres
  // console.log(updatedSelectedGenres);
  return (
    <>
      <div className="container" style={{ marginTop: "40px" }}>
        <div className="row">
          <div className="col-md-8">
            <div className="profile-data" style={{ display: "flex" }}>
              <div className="img">
                <img src={cartoon} />
              </div>
              <div className="content">
                {
                  <>
                    <h2 className="name">{data.name}</h2>
                    <h2 className="email">{data.email}</h2>
                    <h1 className="user">{data.user}</h1>
                    <div className="list-of-genre">
                    <ul className="genre">
                      {selectedGenres.map((genre) => {
                        return <li>{genre}</li>;
                      })}
                    </ul>
                    </div>
                  
                  </>
                }
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <News />
          </div>
        </div>
      </div>
      <div className="wheather-content">
        <Wheather />
      </div>
    </>
  );
}
