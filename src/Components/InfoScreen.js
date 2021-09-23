import React from 'react'

const InfoScreen = ({ display, startGame }) => {

    
    const gameReset = () => {
        /*setDisplay(0)
        setGameOn(false)
        setFail(false)
        setTimelapse(4000)*/
        window.location.reload()
    }

    return (
        <div className="scores">
        <div className="nopeustesti">NOPEUSTESTI</div>
        <div className="speedscale">
            <div className="scale scale-1"><p className="scale-text">1</p></div>
            <div className="scale scale-2"><p className="scale-text">2</p></div>
            <div className="scale scale-3"><p className="scale-text">3</p></div>
            <div className="scale scale-4"><p className="scale-text">4</p></div>
            <div className="scale scale-5"><p className="scale-text">5</p></div>
            <div className="scale scale-6"><p className="scale-text">6</p></div>
            <div className="scale scale-7"><p className="scale-text">7</p></div>
        </div>
        <div className="display">{display}</div>
        <div 
            className="btn btn-danger my-3 mx-3"
            onClick={() => gameReset()}>
            Reset
        </div>
        <div 
            className="btn btn-success mx-3"
            onClick={() => startGame()}>
            start
        </div>
        </div>
    )
}

export default InfoScreen