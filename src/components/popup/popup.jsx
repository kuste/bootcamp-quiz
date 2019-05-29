import React from "react"
import "./popup.css"
export const Popup = props => {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>{props.text}</h1>
        {props.type === "Ok" ? (
          <div className="buttonsOK">
            <button onClick={() => props.closePopup("Ok")}>Ok</button>
          </div>
        ) : (
          <div className="buttons">
            <button onClick={() => props.closePopup("Da")}>Da</button>
            <button onClick={() => props.closePopup("Ne")}>Ne</button>
          </div>
        )}
      </div>
    </div>
  )
}
