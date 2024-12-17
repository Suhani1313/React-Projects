import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment = ()=>{
    setCount(count+1);
  }
  return(
    <div>
      <p>By Just touching me , the number will increment automatically</p>
      <h1 onClick={increment}>😊 <br />{count}</h1>
      {/* onClick = {increment()} . while rendering increment() will be called even click event is not triggered and this will increment the value of count and the line will be rendered again and during this increment() return value will be assigned to onClick which is undefined */}
    </div>
  )
}

export default App
