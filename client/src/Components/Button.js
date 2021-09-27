import React from 'react'

const Buttons = ({ display, setDisplay, button1, button2, button3, button4, setButton1, setButton2, setButton3, setButton4, setFail, gameOn }) => {

    const plusOne = (currentTarget) => {
        switch (currentTarget) {
            case 'button-1':
                btnClicked(button1, setButton1)
                break
            case 'button-2':
                btnClicked(button2, setButton2)
                break
            case 'button-3':
                btnClicked(button3, setButton3)
                break
            case 'button-4':
                btnClicked(button4, setButton4)
                break
            default:
                console.log("default")
                break
        }
    }

    const btnClicked = (button, setButton) => {
        if (button) {
            setButton(!button)
            setDisplay(display + 1)
        } 
        if (!button && gameOn) {
            setFail(true)
        }
    }

    let className1 = button1 ? 'button-1-active' : 'button-1'
    let className2 = button2 ? 'button-2-active' : 'button-2'
    let className3 = button3 ? 'button-3-active' : 'button-3'
    let className4 = button4 ? 'button-4-active' : 'button-4'

    return (
        <div className="buttons">
            <OneButton className={className1} id="button-1" plusOne={plusOne} gameOn={gameOn}/>
            <OneButton className={className2} id="button-2" plusOne={plusOne} gameOn={gameOn}/>
            <OneButton className={className3} id="button-3" plusOne={plusOne} gameOn={gameOn}/>
            <OneButton className={className4} id="button-4" plusOne={plusOne} gameOn={gameOn}/>
        </div>
    )
}

const hideButtons = { zIndex: 1 }
const showButtons = { zIndex: 1 }


const OneButton = ({ id, plusOne, className, gameOn }) => (
    <div 
        className={className} id={id} style={gameOn ? showButtons : hideButtons}
        onClick={() => plusOne(id)}>
    </div>
)

export default Buttons