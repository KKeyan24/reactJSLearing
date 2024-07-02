import React, { useEffect, useState } from 'react'

function CondtRendering() {
    const [name, setName] = useState('');
    useEffect(()=> {
        document.getElementById('print').innerHTML = `${name}`
    }, [name])
  return (
    <div>
      <h1>Conditional Rendering using state and effect</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => setName('')}>Clear</button>
      <div id="print"></div>
    </div>
  )
}

export default CondtRendering
