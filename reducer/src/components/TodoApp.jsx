
import React from 'react'
import Todos from './Todos'

const ACTIONS = {
    ADD : 'add',
    DELETE : 'delete',
    ISCOMPLETED : 'isCompleted'
}

function reducer(state, action) {
    
    switch (action.type) {
        case ACTIONS.ADD:
            return [...state, action.payload]

        case ACTIONS.DELETE :
            return state.filter((todo)=>{
                if(action.payload.id!==todo.id)
                {
                    return todo
                }
            })
            
        case ACTIONS.ISCOMPLETED : 
            return state.map((todo)=>{

                console.log(todo)
                if(todo.id==action.payload.id)
                {
                    return  {...todo, completed:!todo.completed}
                }
                return todo
            })
        default:
            state
    }
}

function TodoApp() {

    const [todos, dispatch] = React.useReducer(reducer, [])
    const [task, setTask] = React.useState('')

    function inputHandler(event) {
        // console.log(event.target.value)
        setTask(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault()
        // console.log(task)
        dispatch({type : ACTIONS.ADD, payload : {id:Date.now(), name: task, completed : false}})
        // console.log(todos)
    }

  return (
    <div>
        <h1>Hello</h1>
        <form onSubmit={submitHandler}>
           <input
           onChange={inputHandler}
           name="task"
           value={task}  
            />
            <button type='submit'>Add</button>
        </form>
        {todos.map((todo)=>{
         return <Todos key={todo.id} todo={todo} dispatch={dispatch}/>
        })}
    </div>
  )
}

export {TodoApp, ACTIONS}