import React, { useState } from "react";
import timer from "./timer.css";
import countDown from '../Images/countDown.png'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
export default function Timer() {
  const [minute, setMinute] = useState("00");
  const [hour, setHour] = useState("00");
  const [second, setSecond] = useState("00");
  const [toggleButton, setToggleButton] = useState("Start");
  const [stopTime, setStopTime] = useState(null);
  const [playing,setPlaying]=useState(false)
  const handleIncHour = (h) => {
    let getHour = parseInt(h, 10);
    getHour += 1;
    if (getHour <= 9) {
      setHour("0" + getHour);
    } else if (getHour >= 24) {
      setHour("00");
    } else {
      setHour(getHour);
    }
  };

  const handleDecHour = (h) => {
    let getHour = parseInt(h, 10);
    if (getHour === 0) {
      getHour = 23;
      setHour(getHour);
    } else if (getHour <= 9) {
      getHour -= 1;
      setHour("0" + getHour);
    } else {
      getHour -= 1;
      if (getHour === 9) {
        setHour("0" + getHour);
        return;
      }
      setHour(getHour);
    }
  };

  const handleIncMinute = (m) => {
    let getMin = parseInt(m, 10);
    getMin += 1;
    if (getMin <= 9) {
      setMinute("0" + getMin);
    } else if (getMin >= 60) {
      setMinute("00");
    } else {
      setMinute(getMin);
    }
  };
  const handleDecMinute = (m) => {
    let getMin = parseInt(m, 10);
    if (getMin == 0) {
      getMin = 59;
      setMinute(getMin);
    } else if (getMin <= 9) {
      getMin -= 1;
      setMinute("0" + getMin);
    } else {
      getMin -= 1;
      if (getMin == 9) {
        setMinute("0" + getMin);
        return;
      }
      setMinute(getMin);
    }
  };
  const handleIncSec = (s) => {
    let getSec = parseInt(s, 10);
    getSec += 1;
    if (getSec <= 9) {
      setSecond("0" + getSec);
    } else if (getSec >= 60) {
      setSecond("00");
    } else {
      setSecond(getSec);
    }
  };
  const handleDecSec = (s) => {
    let getSec = parseInt(s, 10);
    if (getSec == 0) {
      getSec = 59;
      setSecond(getSec);
    } else if (getSec <= 9) {
      getSec -= 1;
      setSecond("0" + getSec);
    } else {
      getSec -= 1;
      if (getSec == 9) {
        setSecond("0" + getSec);
        return;
      }
      setSecond(getSec);
    }
  };
  const handleTimer = (getTimeHour, getTimeMin, getTimeSec) => {
    setPlaying(true)
    if (toggleButton == "Start") {
      setToggleButton("Stop");
      const intervalId = setInterval(() => {
        if (getTimeMin >= 1 && getTimeSec >= 1) {
          getTimeSec -= 1;
        }
        let valSec = parseInt(getTimeSec, 10);
        let valMin = parseInt(getTimeMin, 10);
        if (valSec <= 0 && valMin <= 0) {
          setSecond(valSec >= 10 ? valSec : "0" + valSec);
          clearInterval(stopTime);
          setToggleButton("Start");
          return;
        } else if (valSec === 0) {
          getTimeMin -= 1;
          getTimeSec = 60;
        } else if (valMin == 0 && valSec >= 0) {
          getTimeSec -= 1;
        } else if (valMin >= 0 && valSec === 0) {
          getTimeSec = 59;
          // setSecond(valSec)
        }
        setSecond(valSec >= 10 ? valSec : "0" + valSec);
        setMinute(valMin >= 10 ? valMin : "0" + valMin);
      }, 1000);
      setStopTime(intervalId);
    } else {
      setToggleButton("Start");
      clearInterval(stopTime);
    }
  };
  function toHoursMinutesAndSeconds(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${parseInt(hour,10) >= 9 ? parseInt(hour,10) : '0'+ parseInt(hour,10)}:${parseInt(minute,10) >= 9 ? parseInt(minute,10) : "0" + parseInt(minute,10)}:${parseInt(second,10) >= 9 ? parseInt(second,10) : "0" + parseInt(second,10)}`;
  }


  return (
    <>
      <div className="row">
        <div className="col-md-5">
          <div className="countdown" style={{padding:'30px'}}>
            
          <CountdownCircleTimer
              isPlaying={playing}
              duration={hour * 3600 + minute * 60 + second}
              colors={["#FF6A6A"]}
            >
              {({ remainingTime }) => (
                <span style={{ color: "white", fontSize: "1.5rem" }}>
                  {toHoursMinutesAndSeconds(remainingTime)}
                </span>
              )}
            </CountdownCircleTimer>
            

          
          </div>
          
        </div>
        <div className="col-md-7 timer-div">
          <div className="hour">
            <h3>Hour</h3>
            <div className="buttons">
              <i class="fa fa-sort-asc fa-3x hUp" onClick={()=>handleIncHour(hour)} aria-hidden="true"></i>
              <h1 className="hour-data">{hour}</h1>
              <i class="fa fa-sort-desc fa-3x hDow" onClick={()=>handleDecHour(hour)} aria-hidden="true"></i>
            </div>
          </div>
          <p
            style={{
              color: "white",
              marginTop: "10px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            :
          </p>
          <div className="min">
            <h3>Minutes</h3>
            <div className="buttons">
              <i
                class="fa fa-sort-asc fa-3x mUp"
                onClick={() => handleIncMinute(minute)}
                aria-hidden="true"
              ></i>
              <h1 className="minute">{minute}</h1>
              <i
                class="fa fa-sort-desc fa-3x mDow"
                onClick={() => handleDecMinute(minute)}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div className="sec">
            <h3>Second</h3>
            <div className="buttons">
              <i
                class="fa fa-sort-asc fa-3x sUp"
                onClick={() => handleIncSec(second)}
                aria-hidden="true"
              ></i>
              <h1 className="second">{second}</h1>
              <i
                class="fa fa-sort-desc fa-3x sDow"
                onClick={() => handleDecSec(second)}
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div
          class="d-grid gap-2 d-md-flex justify-content-md-center"
          style={{ marginLeft: "140px", marginTop: "-50px" }}
        >
          <button
            class="btn btn-danger col-6"
            type="button"
            onClick={() => handleTimer(hour, minute, second)}
          >
            {toggleButton}
          </button>
        </div>
      </div>
    </>
  );
}
