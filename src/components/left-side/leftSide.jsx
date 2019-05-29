import React, { useState } from "react"
import "./leftSide.css"
import { Popup } from "../popup/popup"

export const LeftSide = props => {
  const [isVisibleNew, setIsVisibleNew] = useState(false)
  const [isVisibleLeave, setIsVisibleLeave] = useState(false)

  console.log(props.reward)

  const startNewgame = btnName => {
    setIsVisibleNew(false)
    props.handleNewGame(btnName)
  }
  const handleClickNew = () => {
    setIsVisibleNew(true)
  }
  const handleClickLeave = () => {
    setIsVisibleLeave(true)
  }

  const leaveGame = () => {
    setIsVisibleLeave(false)
    props.handleNewGame("Da")
  }

  return (
    <div className="mainContLeft">
      {isVisibleNew && <Popup closePopup={startNewgame} text={"Zapocni novu igru."} />}
      {isVisibleLeave && <Popup closePopup={leaveGame} type="Ok" text={"Čestitamo! Osvojili ste " + props.reward + " Kn"} />}
      <div className="btnContainer">
        <button onClick={handleClickNew}>Nova Igra</button>
        <button onClick={handleClickLeave}>Odustani</button>
      </div>
      <div className="score">
        <h4>Score Board</h4>
      </div>
    </div>
  )
}
