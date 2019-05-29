import React, { useState, useEffect } from "react"
import "./questions.css"
import { Popup } from "../popup/popup"
import { Answer } from "./answer"

const initialState = {
  clickedAnswer: undefined,
  styleCorrect: "correct",
  styleWrong: "wrong",
  popup: false,
  buttonName: undefined,
  showMsg: false,
  answers: [],
  correctCount: 1,
  gameOver: false,
  styleA: "answers",
  styleB: "answers",
  styleC: "answers",
  styleD: "answers"
}
export const Questions = props => {
  const { text, answers, correctAnswer } = props.data
  const [state, setState] = useState(initialState)

  const handleClick = playerAnswer => {
    const newState = {
      ...state,
      clickedAnswer: playerAnswer,
      popup: true
    }

    setState(newState)
  }

  const handlePopupClick = buttonName => {
    if (buttonName === "Da") {
      console.log(buttonName)
      const finalAnswer = state.clickedAnswer
      if (finalAnswer === correctAnswer) {
        let newCoutn = props.increment + 1
        const newState = {
          ...state,
          popup: false
        }
        setState(newState)
        const isCorrect = true
        handleStyle(finalAnswer, isCorrect)
        setTimeout(() => {
          props.handleIncrement(newCoutn)
          resetStyle()
        }, 2000)
        console.log("tocno")
      } else {
        setState({
          ...state,
          popup: false
        })
        const isCorrect = false
        handleStyle(finalAnswer, isCorrect)
        setTimeout(() => {
          const newState = {
            ...state,
            popup: false,
            gameOver: true
          }
          setState(newState)
        }, 2000)

        console.log("nije tocno")
      }
    } else {
      console.log(buttonName)
      setState({
        ...state,
        popup: false
      })
    }
  }
  const handlePopupClickGameOver = btnName => {
    if (btnName === "Ok") {
      props.handleIncrement(1)
      const newState = {
        ...state,
        gameOver: false
      }
      setState(newState)
    } else {
      const newState = {
        ...state,
        gameOver: false
      }
      setState(newState)
    }
  }
  const answerKeys = Object.keys(answers)
  /*   let answer = answerKeys.map(item => <Answer onClick={handleClick} answer={answers[item]} key={item} id={item} className={state.defaultStyle} />)
   */

  const resetStyle = () => {
    setState({
      ...state,
      popup: false,
      styleA: "answers",
      styleB: "answers",
      styleC: "answers",
      styleD: "answers"
    })
  }
  const handleStyle = (finalAnswer, isCorrect) => {
    console.log(finalAnswer)

    if (finalAnswer === "A") {
      setState({
        ...state,
        popup: false,
        styleA: isCorrect ? state.styleCorrect : state.styleWrong
      })
    } else if (finalAnswer === "B") {
      setState({
        ...state,
        popup: false,
        styleB: isCorrect ? state.styleCorrect : state.styleWrong
      })
    } else if (finalAnswer === "C") {
      setState({
        ...state,
        popup: false,
        styleC: isCorrect ? state.styleCorrect : state.styleWrong
      })
    } else if (finalAnswer === "D") {
      setState({
        ...state,
        popup: false,
        styleD: isCorrect ? state.styleCorrect : state.styleWrong
      })
    }
  }

  return (
    <div className="main">
      <h1 className="question">{text}</h1>
      {state.showMsg ? state.isAnswered ? <h2 className="msg">vas odg je tocan</h2> : <h2 className="msg">zao mi je niste uspjeli</h2> : null}
      <div className="answerCont">
        <Answer onClick={handleClick} answer={answers[answerKeys[0]]} key={answerKeys[0]} id={answerKeys[0]} className={state.styleA} />
        <Answer onClick={handleClick} answer={answers[answerKeys[1]]} key={answerKeys[1]} id={answerKeys[1]} className={state.styleB} />
        <Answer onClick={handleClick} answer={answers[answerKeys[2]]} key={answerKeys[2]} id={answerKeys[2]} className={state.styleC} />
        <Answer onClick={handleClick} answer={answers[answerKeys[3]]} key={answerKeys[3]} id={answerKeys[3]} className={state.styleD} />
      </div>
      {state.popup ? <Popup closePopup={handlePopupClick} text="Final answer?" /> : null}
      {state.gameOver ? (
        <Popup closePopup={handlePopupClickGameOver} type="Ok" text={"Nažalost odgovor je netočan, osvojili ste " + props.prag + " Kn"} />
      ) : null}
    </div>
  )
}
