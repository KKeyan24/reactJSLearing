import React, {useReducer} from 'react'

const initialState = {
    firstCount: 0
};
const reducer = (state, action) => {
    switch (action) {
        case 'inc':
            return { firstCount: state.firstCount + 1 };
        case 'dec':
            return { firstCount: state.firstCount - 1 };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function ComplexReducer() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Count: {count.firstCount}</h1>
      <button onClick={()=> dispatch({type: 'inc'})}>Inc</button>
      <button onClick={()=> dispatch({type: 'dec'})}>Dec</button>
      <button onClick={()=> dispatch({type: 'reset'})}>reset</button>
    </div>
  )
}

export default ComplexReducer
