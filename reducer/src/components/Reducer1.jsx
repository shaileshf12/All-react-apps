
import React from 'react'

const ACTIONS = {
  INCREAMENT : 'increament',
  DECREAMENT : 'decreament'
}

function reducer(state, action) {
  
  switch (action.type) {
    case ACTIONS.INCREAMENT:
      return {count : state.count+1}

    case ACTIONS.DECREAMENT:
      return {count : state.count-1}  
    default:
      state;
  }
}

function Reducer1() {
  const [state, dispatch] = React.useReducer(reducer, {count : 0})

  function increament() {
    dispatch({type : ACTIONS.INCREAMENT})
  }

  function decreament() {
    dispatch({type : ACTIONS.DECREAMENT})
  }

  return (
    <div>
      <button onClick={increament}>Inc +</button>
      <div>{state.count}</div>
      <button onClick={decreament}>Dec +</button>
    </div>
  )
}

export default Reducer1