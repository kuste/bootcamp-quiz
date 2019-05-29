import React, { useState } from "react"
import { quiz } from "./api/data"
import "./App.css"
import { Questions } from "./components/questions/questions"
import { RightSide } from "./components/right-side/rightSideBar"
import { LeftSide } from "./components/left-side/leftSide"

/**
 * This is our game state object with initial values
 */
const gameState = {
  /**Index of a question the player is currently answering */
  currentQuestionIndex: 0,

  /**The answer that the player gave to the current question */
  playerAnswer: undefined,
  reward: 0
}

/**
 * @description
 * The "Application" component.. This is the root component of our Quiz app.
 */
export default function App() {
  /**
   * useState hook provides as with a current value of the state and a function that can update the state
   * @see https://reactjs.org/docs/hooks-state.html
   * */
  const [state, setState] = useState(gameState)
  const [increment, setIncrement] = useState(1)
  const [rew, setReward] = useState(0)
  const [prag, setPrag] = useState(0)

  /**
   * Take the current question from the quiz object using the question index from the state object */
  const question = quiz.questionsPrviPrag

  let item = question[Math.floor(Math.random() * question.length)]

  /**This is the answer click  handler function. We will attach this to the button that presents offered answer.
   * The parameter "playerAnswer" contains the selected answer ("A","B","C" or "D")
   */
  /*   const handlePlayerAnswerSelected = playerAnswer => {
    const newState = {
      currentQuestionIndex: state.currentQuestionIndex,
      playerAnswer: playerAnswer
    }
    setState(newState)
  } */

  /**The presentation (View). For now only the current question text and buttons for possible answers*/

  const handleIncrement = increment => {
    if (increment === 1) {
      setState({
        ...state,
        currentQuestionIndex: item
      })
    }
    setIncrement(increment)
  }
  const handleNewGame = btnName => {
    if (btnName === "Da") {
      setState({
        ...state,
        currentQuestionIndex: item
      })
      setIncrement(1)
      setPrag(0)
    }
  }
  const handleSendReward = reward => {
    if (reward === 1000) {
      setPrag(1000)
    } else if (reward === 32000) {
      setPrag(32000)
    } else {
      setReward(reward)
    }
    console.log(prag)
  }
  return (
    <div className="App">
      <h1 className="title">Tko želi biti milijunaš?</h1>
      <div className="content">
        <Questions handleIncrement={handleIncrement} prag={prag} increment={increment} data={item} />
      </div>
      <div className="left-sidebar">
        <LeftSide reward={rew} handleNewGame={handleNewGame} />
      </div>
      <div className="right-sidebar">
        <RightSide sendReward={handleSendReward} increment={increment} />
      </div>
    </div>
  )
}
