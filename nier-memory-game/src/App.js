import React, {Component} from 'react'
import Wrapper from './components/GameWrapper'
import Title from './components/Title'
import Card from './components/Card'
import CardsWrapper from './components/CardsWrapper'
import cards from './cards.json'
import './index.css'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cards,
            score : 0,
            highscore : 0
        }
    }

    render() {
        return(<Wrapper>
            <Title score={this.state.score} highscore={this.state.highscore}>Click a unique tile!</Title>
            
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