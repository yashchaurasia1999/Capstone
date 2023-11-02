import React, { useEffect, useState } from "react";
import profile from "../Home Pages/profile.css";
import "font-awesome/css/font-awesome.css";
import cloud from "../Images/cloud.png";
import humidity from '../Images/humidity.png'
import pressure from '../Images/pressure.png'
import wind from '../Images/wind.png'
export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://api.weatherapi.com/v1/current.json?key=bdea9abc5a54446482971503232210&q=ajmer&aqi=no"
        );
        const data = await res.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  let date = new Date();
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();
  let time = date.getMinutes();
  let hour = date.getHours();

  return (
    <>
      {weatherData && (
        <div className="upper">
          <p>{d + " - " + m + " - " + y}</p>
          <p>
            {hour} : {time} {hour >= 12 ? " PM" : " AM"}
          </p>
        </div>
      )}
      {weatherData && (
        <div className="lower">
          <img className="cloud" src={cloud} />
          <p style={{ color: "white" }}>{weatherData.current.condition.text}</p>
          <p className='temp' style={{color:'white'}}>{weatherData.current.temp_c} C</p>
          <img className="pressure-img" src={pressure}/><p className="pressure">{weatherData.current.pressure_mb} mbar <br></br>pressure</p>
          <img className="wind-img" src={wind}/><p className="wind">{weatherData.current.wind_kph} k/h <br></br>Wind</p>
          <img className="humidity-img" src={humidity}/><p className="humidity">{weatherData.current.humidity}%<br></br>Humidity</p>
        </div>
      )}
    </>
  );
}
