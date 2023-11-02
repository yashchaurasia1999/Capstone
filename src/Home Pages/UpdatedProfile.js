import React from "react";
import updatedprofile from "./updatedprofile.css";
import cartoon from "../Images/cartoon.png";
import Wheather from "./Wheather";
import News from "./News";
import Timer from "./Timer";
import Notes from "./Notes";
import { Navigate, useNavigate } from "react-router-dom";
export default function UpdatedProfile() {
  const data = JSON.parse(localStorage.getItem("userData"));
  const navigate=useNavigate()
  let obj= localStorage.getItem("genre_obj");
  // console.log(obj)
  const genres=JSON.parse(obj);
  // console.log(genres['Action'])
  const selectedGenres=Object.keys(genres)
  // console.log(selectedGenres)

  // console.log(selectedGenres.split(',')[0])
  const updatedSelectedGenres = selectedGenres
  const handleBrowse=()=>{
    navigate('/movies')
  }
  return (
    <>
      <div className="container" style={{ marginTop: "40px" }}>
        <div className="row">
          <div className="col-md-4">
            <div className="updated-profile-data" style={{ display: "flex" }}>
              <div className="img">
                <img src={cartoon} />
              </div>
              <div className="content">
                {
                  <>
                    <h4 className="name">{data.name}</h4>
                    <h4 className="email">{data.email}</h4>
                    <h2 className="user">{data.user}</h2>
                    <div className="list-of-genre">
                    <ul className="genre">
                      {updatedSelectedGenres.map((genre) => {
                        return <li>{genre.split(",")}</li>;
                      })}
                    </ul>
                    </div>
                  
                  </>
                }
              </div>
            </div>
            <div className="wheather-content">
              <Wheather/>
            </div>
          </div>
          <div className="col-md-4">
          <Notes/>
          </div>
          <div className="col-md-4">
            <News />
            <button className="btn btn-success" onClick={handleBrowse} style={{marginLeft:'300px',marginTop:'30px'}}>Browse</button>
          </div>
        </div>
      </div>
      <div className="container timer" style={{width:'840px', height:'240px', background:'#1E2343',marginTop:'-220px',marginLeft:'120px',borderRadius:'15px'}}>
        <Timer />
      </div>
    </>
  );
}
