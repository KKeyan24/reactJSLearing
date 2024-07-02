import { useState } from "react"
import React from 'react'

function UseState() {
    const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Use State Hook</h1>
      <button onClick={()=>setCount(count + 1)}>Count</button>
      <div>Count Button Clicked:{count}</div>
    </div>
  )
}

export default UseState
