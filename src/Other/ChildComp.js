import React from 'react'

function ChildComp(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      <button onClick={() => props.greetHandler('Welcome Child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComp
