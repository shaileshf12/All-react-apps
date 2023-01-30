import React from 'react'
import img1 from '../assets/katie-zaferes.png'
import star from '../assets/star.png'

function Card(props) {
    console.log("Hello")
  return (
    <div className="card">
            <img src={`src/assets/${props.img}`} className="card--image" />
            <div src={star}>
                <img src={star} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount} </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
  )
}

export default Card