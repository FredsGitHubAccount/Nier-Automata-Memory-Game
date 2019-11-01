import React from 'react'
import './style.css'


const Card = props => (
    <div className="card-wrapper" onClick={() => props.clickCount(props.id)}>
        <h3>{props.name}</h3>
        <img src={props.image} alt={props.id}></img>

    </div>
)

export default Card