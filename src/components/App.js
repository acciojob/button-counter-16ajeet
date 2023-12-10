
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [clickTime, setClickTime] = useState(0);
  
  function counter(){
    setClickTime(clickTime++);
  }
    
  
  return (
    <div>
        <p>Button clicked {clickTime} times</p>
        <button onClick={counter}>Click Me</button>
    </div>
  )
}

export default App
