import React from 'react'
import './style.css'


const Card = ({clickCount,id,image}) => {
 
    return(<div className="card-wrapper" onClick={() => clickCount(id)}>
        <img src={image} alt={id}></img>

    </div>
    )
}


// class Card extends React.Component{

// render(){
//     return (
//         <div className="card-wrapper" onClick={() => this.props.clickCount(this.props.id)}>
//         <img src={this.props.image} alt={this.props.id}></img>

//     </div>
//     )
// }

// }
export default Card