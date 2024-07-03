import React, {useReducer} from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'inc':
            return state + 1;
        case 'dec':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function ReducerHook() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> dispatch('inc')}>Inc</button>
      <button onClick={()=> dispatch('dec')}>Dec</button>
      <button onClick={()=> dispatch('reset')}>reset</button>
    </div>
  )
}

export default ReducerHook
