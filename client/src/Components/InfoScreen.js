import React, { useState } from 'react'
import Scores from './modal/Scores';
import nameService from "./modal/services/names"

const InfoScreen = ({ display, startGame, gameOn }) => {

    const [scores, setScores] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    
    const showScores = () => {
        if (!gameOn) {
            nameService.getAll().then(scores => {
                scores.sort((a, b) => {
                    return b.score - a.score
                })     
                setScores(scores)
            })
            setIsVisible(true)
        }
    }

    return (
        <div className="scores">
            {isVisible ? <Scores isVisible={isVisible} setIsVisible={setIsVisible} scores={scores} setScores={setScores}/> : null}
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
        <div className="controls">
            <div 
                className="btn btn-warning my-3 mx-3"
                onClick={() => showScores()}>
                Pisteet
            </div>
            <div 
                className="btn btn-success mx-3"
                onClick={() => startGame()}>
                Aloitus
            </div>
        </div>
        </div>
    )
}

export default InfoScreen