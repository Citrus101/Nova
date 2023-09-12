import React from 'react'
import profile from "./Images/profilePic.webp"
import "./Card.css"

export default function 
(props) {
  return (
    <div className='card'>
        <img src={profile} alt="profile picture" />
        <h1>{props.name}</h1>
        <p>{props.title}</p>
    </div>
  )
}
