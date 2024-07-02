import React, { useState } from 'react'

function HookCounter() {
    const initzCount = 0;
    const [count, seCount] = useState(initzCount);
  return (
    <div>
      <h1>Use State with Previous, Current and Reset Value</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => seCount(count + 1)}>Increment</button>
      <button onClick={() => seCount(count - 1)}>Decrement</button>
      <button onClick={() => seCount(initzCount)}>Reset</button>
    </div>
  )
}

export default HookCounter
