import React, { useEffect, useRef } from 'react'
import styles from "./modal.module.css"


const Scores = ({ isVisible, setIsVisible, scores }) => {

    
    const modalRef = useRef(null)

    useEffect(() => {
        if (isVisible) {
            modalRef.current.classList.add(styles.visible)
        } else {
            modalRef.current.classList.remove(styles.visible)
        }
    }, [isVisible])

    const closeScores = () => {
        setIsVisible(false)
    }

    

    return (
        <React.Fragment>
            <div ref={modalRef} className={`${styles.modal}`}>
                <div style={{ overflowY: "scroll" }} className={styles.modal__wrap}>
                    Parhaat pelaajat
                    <div className="btn btn-danger mx-3" onClick={() => closeScores()}>Sulje</div>
                    <div className="tableScroll">
                        <table className="table table-striped table-dark scoreTable">
                            <thead>
                                <tr>
                                    <th scope="col">Nimi</th>
                                    <th scope="col">Pisteet</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scores.map(user => <User score={user.score} name={user.name} key={user.id}/>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const userStyleGold =  { color: "gold" }
const userStyleSilver =  { color: "#bfc1c2" }
const userStyleBronze =  { color: "#D17B36" }
const defaultStyle = { color: "#414a4c" }

const User = ({ score, name }) => (
    <tr className="table-dark" style={Number(score) > 200 ? userStyleGold 
        : Number(score) > 150 ? userStyleSilver : Number(score) > 100 ? userStyleBronze : defaultStyle}>
        <th scope="row">{name}</th>
        <td>{score}</td>
    </tr>
) 
export default Scores
