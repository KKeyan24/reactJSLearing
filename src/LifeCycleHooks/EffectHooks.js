import React, { useEffect, useState } from 'react'

function EffectHooks() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.getElementById('countView').innerHTML = `${count}`
    })
  return (
    <div>
      <h1>Effect Hooks</h1>
      <button onClick={()=> setCount(count + 1)}>Count</button><br></br>
      <span id="countView"></span>
    </div>
  )
}

export default EffectHooks