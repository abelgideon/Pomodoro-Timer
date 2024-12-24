import React from "react"
import {useState, useEffect} from "react"

const App = (props) => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timerLabel, setTimerLabel] = useState("Session");
  const [timeLeft, setTimeLeft] = useState(new Date(0 , 0, 0, 0, sessionLength, 0));
  const [pressed, setPressed] = useState(false);
  
  useEffect(() => {
    setTimeLeft(new Date(0, 0, 0, 0, sessionLength, 0));
  }, [sessionLength]);
  
  useEffect(() => {
    let timer = null;
    if (pressed) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          let newTime = new Date(prev.getTime() - 1000);
          if (newTime.getMinutes() === 0 && newTime.getSeconds() === 0) {
            clearInterval(timer);
            handleTimerEnd();
          }
          return newTime;
        })
      }, 1000)
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [pressed]);
  
  const handleTimerEnd = () => {
    const getAudio = document.getElementById('beep');
    getAudio.play();
    setPressed(false);
    if (timerLabel === "Session") {
      setTimerLabel("Break");
      setTimeLeft(new Date(0 , 0, 0, 0, breakLength, 0));
    } else {
      setTimerLabel("Session");
      setTimeLeft(new Date(0 , 0, 0, 0, sessionLength, 0));
    }
  }
  
  const formatTime = (time) => {
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
  }
  
  const handleBreakIncrease = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  }
  
  const handleBreakDecrease = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  }
  
  const handleSessionIncrease = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
    }
  }
  
  const handleSessionDecrease = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
    }
  }
  
  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <div className="row g-1 border text-center">
        <Label id="break-label" text="Break Length" size="6" />
        <Label id="session-label" text="Session Length" size="6" />
        <div className="col-6">
              <div className="d-flex align-items-center justify-content-center">
                  <Button id="break-decrement" text="-" handler={handleBreakDecrease}/>
                  <p className="p-3 fs-4" id="break-length">{breakLength}</p>
                  <Button id="break-increment" text="+" handler={handleBreakIncrease}/>
              </div>
        </div>
        <div className="col-6">
              <div className="d-flex align-items-center justify-content-center">
                  <Button id="session-decrement" text="-" handler={handleSessionDecrease}/>
                  <p className="p-3 fs-4" id="session-length">{sessionLength}</p>
                  <Button id="session-increment" text="+" handler={handleSessionIncrease}/>
              </div>
        </div>
        <Label id="timer-label" text={timerLabel} size="12" />
        <div className="col-12">
         <p id="time-left" className="mt-2 display-1">{formatTime(timeLeft)}</p>
        </div>
        <div className="col-6">
          <p onClick={() => {
              setPressed(!pressed);
            }} id="start_stop" class="fs-4 p-2 bg-light ms-auto">{pressed ? "Pause" : "Play"}</p>
        </div>
        <div className="col-6">
          <p onClick={() => {
              setTimerLabel("Session");
              setBreakLength(5);
              setSessionLength(25);
              setTimeLeft(new Date(0 , 0, 0, 0, 25, 0));
              setPressed(false);
            }} id="reset" class="fs-4 p-2 bg-light me-auto">Reset</p>
        </div>
        <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
      </div>
    </div>
  );
}

const Label = ({id, text, size}) => {
  return (
    <div className={`col-${size}`}>
      <p className="m-0 fs-2" id={id}>{text}</p>
    </div>
  );
}

const Button = ({id, text, handler}) => {
  return (
      <p onClick={handler} id={id} className="p-2 bg-light buttons">{text}</p>
  );
}

export default App;