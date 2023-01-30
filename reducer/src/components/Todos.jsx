
import React from 'react'
import {ACTIONS} from './TodoApp'

function Todos(props) {

  function handleDelete() {
    props.dispatch({type : ACTIONS.DELETE, payload : props.todo}) 
  }

  function toggle() {
    props.dispatch({type : ACTIONS.ISCOMPLETED, payload : props.todo})
  }

  return (
    <div>
      <span style={{backgroundColor : props.todo.completed ? 'green' : 'red'}}>{props.todo.name}</span>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={toggle}>toggle </button>
    </div>
  )
}

export default Todos