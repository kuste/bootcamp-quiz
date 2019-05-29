import React, { useState, useEffect } from "react"
import "./rightSide.css"

const initState = {
  active: true,
  increment: undefined
}
export const RightSide = props => {
  const [state, setState] = useState(initState)
  const rewardArr = [1000000, 500000, 250000, 125000, 64000, 32000, 16000, 8000, 4000, 2000, 1000, 500, 300, 200, 100]

  console.log(props.increment)

  useEffect(() => {
    setState({
      ...state,
      increment: props.increment
    })
  }, [props.increment])

  props.sendReward(rewardArr[rewardArr.length - state.increment + 1] || 0)
  const comp = rewardArr.map((item, key) => {
    if (item === 1000 || item === 32000 || item === 1000000) {
      return (
        <div className={state.active && key === rewardArr.length - state.increment ? "activePrag" : "prag"} key={key}>
          <div style={{ float: "left" }}>{rewardArr.length - key}</div>
          {item}
        </div>
      )
    } else {
      return (
        <div className={state.active && key === rewardArr.length - state.increment ? "active" : "value"} key={key}>
          <div style={{ float: "left" }}>{rewardArr.length - key}</div>
          {item}
        </div>
      )
    }
  })

  return <div className="mainCont">{comp}</div>
}
