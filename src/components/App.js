
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [clickTime, setClickTime] = useState(0);
  
  function counter(clickTime){
    setClickTime(clickTime++);
  }
    
  
  return (
    <div>
        <p>Button clicked {setClickTime} times</p>
        <button onClick={counter}>Click Me</button>
    </div>
  )
}

export default App
