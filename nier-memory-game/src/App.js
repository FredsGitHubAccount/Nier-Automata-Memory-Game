import React, {Component} from 'react'
import Wrapper from './components/GameWrapper'
import Title from './components/Title'
import Card from './components/Card'
import CardsWrapper from './components/CardsWrapper'
import cards from './cards.json'
import './index.css'

class App extends Component {
constructor(props){
    super(props)
    this.state = {
        cards,
        score : 0,
        highscore : 0
    }

}


    gameOver = () => {

        if(this.state.score>this.state.highscore){
            this.setState({highscore:this.setState.highscore = this.state.score})
        }

        this.state.cards.forEach(card => card.count = 0)
        this.setState({score : 0})

    }

    victoryCheck = () => {
        let remainingCards = this.state.cards.filter(card=> card.count === 0)
        if(remainingCards.length === 0){
            alert('You have selected all cards! Keep going to increase your score')
            this.state.cards.forEach(card => card.count = 0)
        }
        
    }


    clickCount = id => {

     
        this.state.cards.find(card=>{
            
            if(card.id === id){
                
                if(card.count===0){
                    
                    this.setState({score : this.state.score + 1})
                    card.count = card.count + 1
                    this.state.cards.sort(()=>Math.random() -.5)
                    this.victoryCheck()
                    return true;
                }
                
                else {
                    alert('You have lost!')
                    this.gameOver()
                    return true;
                }
            }
            return false;
        })
            
          }
        
      
     
    render(){
        return(<Wrapper>
            <Title score={this.state.score} highscore={this.state.highscore}/>
            
            <CardsWrapper>
            {this.state.cards.map(card => (
                <Card
                    clickCount={this.clickCount}
                    id={card.id}
                    key={card.id}
                    name={card.name}
                    image={card.image}
                />
            ))}
        </CardsWrapper>
        </Wrapper>
        )


    }
}







export default App