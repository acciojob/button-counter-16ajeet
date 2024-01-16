import React from 'react'
import {useState} from 'react'


const App = () => {

  const [clickedTimes, setClickedTimes] = useState(0)

  const counter = () => {
    return setClickedTimes(clickedTimes + 1)
  }
  return (
    <div>
      <p>Button clicked {clickedTimes} times</p>
      <button onClick = {() => counter()}> Click Me </button>
    </div>
  )
}

export default App