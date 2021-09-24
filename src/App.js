import React, { useEffect } from 'react'
import useState from 'react-usestateref'
import './App.css';
import InfoScreen from './Components/InfoScreen';
import Buttons from './Components/Button';
import Modal from './Components/modal/Modal';


function App() {

  const [display, setDisplay] = useState(0)
  const [timeOn, setTimeOn] = useState(false)
  const [gameOn, setGameOn] = useState(false)
  const [start, setStart] = useState(false)
  const [fail, setFail] = useState(false)
  const [button1, setButton1] = useState(false)
  const [button2, setButton2] = useState(false)
  const [button3, setButton3] = useState(false)
  const [button4, setButton4] = useState(false)
  const [timelapse, setTimelapse] = useState(2000)

  const startGame = () => {
    setGameOn(true)
  }
 
  const getRandom = () => {
    let ran = Math.floor(Math.random() * 4 + 1)
    console.log(ran)
    return ran
  }

  const lightOn = () => {
    if (gameOn && !fail) {
      setTimeOn(!timeOn)

      switch (getRandom()) {
        case 1:
          setButton1(true)
          break
        case 2:
          setButton2(true)
          break
        case 3:
          setButton3(true)
          break
        case 4:
          setButton4(true)
          break
        default:
          console.log("default")
          break
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setStart(!start)
    }, timelapse)
  }, [timeOn])

  useEffect(() => {
    if (!fail && gameOn && !button1 && !button2 && !button3 && !button4) {
      setTimelapse(timelapse * 0.99)
      console.log("timelapse", timelapse)
      lightOn()
    } else if (button1 || button2 || button3 || button4) {
      //failWindow()
      setFail(true)
    }
  }, [start, gameOn])

  /*const failWindow = () => {
    setFail(true)
    setGameOn(false)
    if (window.confirm(`game over, your score is: ${display}`)) {
      window.location.reload()
    }
  }*/

  const numberDisplay = () => {
    let expr = String(display)
    let exprLen = expr.length
    switch (exprLen) {
      case 1:
        return `000${expr}`
      case 2:
        return `00${expr}`
      case 3:
        return `0${expr}`
      default:
        return expr
    }
  }
  return (
    <div className="App">
      <div className="container main-frame">
        <Modal fail={fail} display={display} />
        <InfoScreen display={numberDisplay()} setDisplay={setDisplay} setGameOn={setGameOn} startGame={startGame} setFail={setFail} setTimelapse={setTimelapse} />
        <Buttons display={display} setDisplay={setDisplay}
        button1={button1} setButton1={setButton1}
        button2={button2} setButton2={setButton2}
        button3={button3} setButton3={setButton3}
        button4={button4} setButton4={setButton4}
        setGameOn={setGameOn} gameOn={gameOn}
        setTimeOn={setTimeOn} timeOn={timeOn}
        setFail={setFail} fail={fail}
        lightOn={lightOn}/>
      </div>
    </div>
  );
}


export default App;
