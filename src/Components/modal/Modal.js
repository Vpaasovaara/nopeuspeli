import React, { useEffect, useRef } from 'react'
import styles from "./modal.module.css"

const Modal = ({ fail, display, backdropstyle, modalStyle, handleSubmit, name, setName }) => {
    const modalRef = useRef(null)
    useEffect(() => {
        if (fail) {
            modalRef.current.classList.add(styles.visible)
        } else {
            modalRef.current.classList.remove(styles.visible)
        }
    }, [fail])

    return (
        <React.Fragment>
            <div ref={modalRef} style={backdropstyle} className={`${styles.modal}`}>
                <div style={modalStyle} className={styles.modal__wrap}>
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
                        <div className="btn btn-warning mx-3" onClick={() => window.location.reload()}>Close</div>
                        <div className="btn btn-success mx-3" onClick={() => window.location.reload()}>Submit</div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Modal