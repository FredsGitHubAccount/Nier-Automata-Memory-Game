import React, { Component } from 'react'
import Wrapper from './components/GameWrapper'
import Title from './components/Title'
import Card from './components/Card'
import CardsWrapper from './components/CardsWrapper'
import cardsData from './cards.json'
import './index.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCards: [],
            cards: [],
            score: 0,
            highscore: 0,
            message: ""
        }

    }

    componentDidMount() {
        const storage = JSON.parse(localStorage.getItem("clickyGame")) || { highscore: 0 }
        this.setState({ highscore: storage.highscore, cards: this.shuffleCards(cardsData) })
    }


    gameOver = () => {

        if (this.state.score > this.state.highscore) {
            const storeData = JSON.stringify({ highscore: this.state.score })
            localStorage.setItem("clickyGame", storeData)
            this.setState({ highscore: this.state.score })
        }

        //this.state.cards.forEach(card => card.count = 0)
        this.setState({ score: 0 })

    }

    victoryCheck = () => {
        let remainingCards = this.state.cards.filter(card => card.count === 0)
        if (remainingCards.length === 0) {
            this.setState({ message: 'You have selected all cards! Keep going to increase your score', cards: this.shuffleCards(cardsData) })
            // this.state.cards.forEach(card => card.count = 0)
        }

    }


    clickCount = id => {



        let isDuplicate = false
        let newCards = this.state.cards.map(card => {
            if (card.id === id) {
                if (this.state.selectedCards.includes(id)) {
                    isDuplicate = true;
                } else {
                    this.setState({ selectedCards: [...this.state.selectedCards, id]})
                }
            }
            return card;
        })
        if (isDuplicate) {
            this.setState({ message: "You have lost!", cards: this.shuffleCards(cardsData), selectedCards: [], score: 0 })
        } else {
            this.setState({ message: "", cards: this.shuffleCards(newCards), score: this.state.score + 1 })
            this.victoryCheck()
        }
    }

    shuffleCards = original => {
        let arr = [...original];
        for (let i in arr) {
            let randIndex = Math.floor(Math.random() * arr.length);

            let temp1 = arr[randIndex];
            let temp2 = arr[i];

            arr[randIndex] = temp2;
            arr[i] = temp1
        }
        return arr
    }

    render() {

        const { cards, score, highscore, message } = this.state

        return (<Wrapper>
            <Title score={score} highscore={highscore} message={message} />

            <CardsWrapper>
                {cards.map(card => (
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




        // this.state.cards.find(card => {

        //     if (card.id === id) {

        //         if (card.count === 0) {

        //             this.setState({ score: this.state.score + 1 })
        //             card.count = card.count + 1
        //             this.victoryCheck()
        //             this.setState({ message: "", cards: this.shuffleCards(this.state.cards) })
        //             return true;
        //         }

        //         else {
        //             this.setState({ message: 'You have lost!', cards: this.shuffleCards(cardsData) }, ()=>console.log(this.state))
        //             this.gameOver()
        //             return true;
        //         }
        //     }
        //     return false;
        // })
// }
    