import React, { useState } from 'react'
import './App.css'
import Reducer1 from './components/Reducer1'
import {TodoApp} from './components/TodoApp'
import ComponentA from './components/ComponentA'
import Ref from './components/Ref'

export const UserContext = React.createContext()

function App() {

  const name = "Shailesh"
  return (
    <div>
      {/* <Reducer1/> */}
      {/* <TodoApp/> */}
      {/* <UserContext.Provider value={name}>
        <ComponentA/>
      </UserContext.Provider> */}
      <Ref/>
    </div>
  )
}

export default App
