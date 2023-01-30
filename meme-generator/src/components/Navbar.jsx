
import React from 'react'
import logo from '../assets/troll-face.png'

function Navbar() {
  return (
    <div className='nav'>
        <img className='logo' src={logo}/>
        <h1 className='name'>Meme Generator</h1>
        <p className='heading'>React Course - Project 3</p>
    </div>
  )
}

export default Navbar