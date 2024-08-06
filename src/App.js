import { useState } from "react";
import './style.css'

function Counter()
{

  var [count,setCount] = useState(0)

  function increment(){
    setCount(count+1)
  }

  function decrement(){
    setCount(count-1)
  }

  function reset(){
    setCount(count*0)
  }

  return(
    <div id="div">
      <h3>Counter App using useState</h3>
      <h1>{count}</h1>
      <div id="btn-container">
      <button onClick={increment} className="btn">+</button>
      <button onClick={decrement} className="btn">-</button>
      <button onClick={reset} className="btn">Reset</button>
      </div>
    </div>
  )

}

export default Counter;

