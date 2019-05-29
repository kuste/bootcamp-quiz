import React from "react"
import "./questions.css"
export const Answer = props => {
  return (
    <div onClick={() => props.onClick(props.id)} className={props.className}>
      <div>{props.id}:</div>
      {props.answer}
    </div>
  )
}
