import React from 'react'

export default function CountdownNumberCard({text, count}) {
  return (
    <div className="klk">
      <div className="container">
        <div className="top-half"></div>
        <div className="bottom-half"></div>
        <span className="timerNumber">{count}</span>
      </div>
      <span>{text}</span>
    </div>
  )
}
