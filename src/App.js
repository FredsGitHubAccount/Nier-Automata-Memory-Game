import React, { useContext, useEffect } from 'react'
import Wrapper from './components/GameWrapper'
import Title from './components/Title'
import Card from './components/Card'
import CardsWrapper from './components/CardsWrapper'
import cardsData from './cards.json'
import './index.css'
import { Animated } from "react-animated-css";
import { MessageContext, CardsContext, ScoreContext, HighscoreContext } from './Hooks'

const App = () => {

    let [highscore, setHighscore] = useContext(HighscoreContext)
    let [, setMessage] = useContext(MessageContext)
    let [score, setScore] = useContext(ScoreContext)
    let [cards, setCards] = useContext(CardsContext)

    useEffect(() => {
        let storage = JSON.parse(localStorage.getItem("memoryGame")) || { highscore: 0 }
        setHighscore(storage.highscore)
        setCards(shuffleCards(cardsData))


    },[])

    let shuffleCards = data => {

        for (let i = 0; i < data.length; i++) {
            let randIndex = Math.floor(Math.random() * data.length);
            [data[i], data[randIndex]] = [data[randIndex], data[i]]
        }
        return data
    }

    let gameOver = () => {

        if (score > highscore) {
            const storeData = JSON.stringify({ highscore: score })
            localStorage.setItem("memoryGame", storeData)
            setHighscore(score)
        }
        setMessage("Game Over!")
        cards.forEach(card => card.count = 0)
        setScore(0)
    }

    let victoryCheck = () => {

        let remainingCards = cards.filter(card => card.count === 0)
        if (remainingCards.length === 0) {
            setMessage("You Have Selected All The Cards! Keep Going To Increase Your Score!")
            cards.forEach(card => card.count = 0)
        }
    }



    let clickCount = id => {
        cards.find(card => {
            if (card.id === id) {
                if (card.count === 0) {
                    setMessage("")
                    setScore(score += 1)
                    card.count = card.count + 1
                    setCards(shuffleCards(cards))
                    victoryCheck()
                    return true

                }
                else {
                    gameOver()
                    setCards(shuffleCards(cards))
                    return true
                }
            }
            return false
        })
    }



    return (<Wrapper>
        <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>

            <Title/>
        </Animated>

        <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true}>

            <CardsWrapper>

                {cards.map(({ id, image }) => (
                    <Card
                        clickCount={clickCount}
                        id={id}
                        key={id}
                        image={image}
                    />
                ))}

            </CardsWrapper>
        </Animated>


    </Wrapper>
    )
}



// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             message: "",
//             cards: [],
//             score: 0,
//             highscore: 0
//         }


//     }

//     componentDidMount() {
//         const storage = JSON.parse(localStorage.getItem("memoryGame")) || { highscore: 0 }
//         this.setState({ highscore: storage.highscore, cards: this.shuffleCards(cardsData) })

//     }

//     shuffleCards = data => {


//         for (let i = 0; i<data.length; i++) {

//             let randIndex = Math.floor(Math.random() * data.length);
//             [data[i],data[randIndex]] = [data[randIndex],data[i]]

//         }
//         return data
//     }

//     gameOver = () => {

//         if (this.state.score > this.state.highscore) {
//             const storeData = JSON.stringify({ highscore: this.state.score })
//             localStorage.setItem("memoryGame", storeData)
//             this.setState({ highscore: this.state.score })
//         }

//         this.setState({ message: 'Game Over!' })
//         this.state.cards.forEach(card => card.count = 0)
//         this.setState({ score: 0 })

//     }

//     victoryCheck = () => {
//         let remainingCards = this.state.cards.filter(card => card.count === 0)
//         if (remainingCards.length === 0) {
//             this.setState({ message: 'You Have Selected All The Cards! Keep Going To Increase Your Score' })
//             this.state.cards.forEach(card => card.count = 0)
//         }

//     }


//     clickCount = id => {


//         this.state.cards.find(card => {

//             if (card.id === id) {

//                 if (card.count === 0) {

//                     this.setState({ message: '' })
//                     this.setState({ score: this.state.score + 1 })
//                     card.count = card.count + 1
//                     this.setState({ cards: this.shuffleCards(this.state.cards) })
//                     this.victoryCheck()
//                     return true;
//                 }

//                 else {
//                     this.gameOver()
//                     this.setState({ cards: this.shuffleCards(this.state.cards) })
//                     return true;
//                 }
//             }
//             return false;
//         })

//     }

//     render() {


//         const { cards, score, highscore, message } = this.state

//         return (<Wrapper>
//             <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>

//                 <Title score={score} highscore={highscore} message={message} />
//             </Animated>

//             <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true}>

//                 <CardsWrapper>

//                     {cards.map(({id,name,image}) => (
//                         <Card
//                             clickCount={this.clickCount}
//                             id={id}
//                             key={id}
//                             name={name}
//                             image={image}
//                         />
//                     ))}

//                 </CardsWrapper>
//             </Animated>


//         </Wrapper>
//         )

//     }
// }









export default App