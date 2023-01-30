
import React from 'react'
import photo_grid from '../assets/photo-grid.png'

function Hero() {
  return (
    <div className='hero'>
        <img className='photo-grid' src={photo_grid}/>
        <h1 className='heading'>Online Experiences</h1>
        <p className='tag-line'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default Hero