import React from 'react'
import './style.css'

let Title = props =>(
    <div className="title-wrapper">
            <div className="logo-score-wrapper">
            <div className="logo-wrapper">
                <img className="nier-logo" alt="img" src="https://i.dlpng.com/static/png/5577261-nier-automata-logo-png-abeoncliparts-cliparts-vectors-for-nier-automata-logo-transparent-2120_900_preview.png"></img>
            </div>
        <div>
        <h2>Current Score : {props.score}</h2>
        <h2>High Score : {props.highscore}</h2>
        </div> 
        </div>

        <div className="directions-wrapper">
        <h1>Memory Game</h1>
        <h2>Clicking A Unique Card Grants A Point & Will Shuffle The Cards!  Be Careful, You Can't Select The Same Card Twice!</h2>
        </div>
     
        
        </div>
)


export default Title