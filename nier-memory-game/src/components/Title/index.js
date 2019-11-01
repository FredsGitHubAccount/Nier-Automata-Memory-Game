import React from 'react'
import './style.css'

let Title = props =>(
    <div className="title-wrapper">
            <div className="directions-wrapper">
             <h1>{props.children}</h1>
            </div>
       
        <div className="score-wrapper">
        <h2>Current Score : {props.score}</h2>
        <h2>High Score : {props.highscore}</h2>
        </div>
        
        </div>
)


export default Title