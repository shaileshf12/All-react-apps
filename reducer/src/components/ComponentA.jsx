
import React from 'react'
import {UserContext} from '../App'

function ComponentA() {

    const userName = React.useContext(UserContext)
  return (
    <div>My name is {userName}</div>
  )
}

export default ComponentA