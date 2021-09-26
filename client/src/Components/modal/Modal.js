import React, { useEffect, useRef, useState } from 'react'
import styles from "./modal.module.css"
import nameService from "./services/names"

const Modal = ({ fail, display }) => {

    const modalRef = useRef(null)
    const [ name, setName ] = useState('')

    useEffect(() => {
        if (fail) {
            modalRef.current.classList.add(styles.visible)
        } else {
            modalRef.current.classList.remove(styles.visible)
        }
    }, [fail])

    const handleSubmit = async(e) => {
        e.preventDefault()
        let newScore = {
            name: name,
            score: display
        }
        try {
            await nameService.create(newScore)
            setName('')
            window.location.reload()
        } catch (exception) {
            console.log("error creating new user")
        }
    }

    return (
        <React.Fragment>
            <div ref={modalRef}  className={`${styles.modal}`}>
                <div className={styles.modal__wrap}>
                    <p>game over, your score is: {display}</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Enter your name here to submit your score</label>
                        <input
                            placeholder="name"
                            id="name"
                            type="text"
                            value={name}
                            name="password"
                            onChange={({ target }) =>
                                setName(target.value)}
                            required/><br />
                        <button className="btn btn-success mx-3" type="submit">Submit</button>
                        <div className="btn btn-warning mx-3" onClick={() => window.location.reload()}>Close</div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Modal