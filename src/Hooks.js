import React, {useState} from 'react'
export const MessageContext =React.createContext("")
export const CardsContext = React.createContext("")
export const ScoreContext = React.createContext("")
export const HighscoreContext = React.createContext("")

const Hooks = ({children})=> {

    const [message,setMessage] = useState("");
    const [cards,setCards] = useState([]);
    const [score,setScore] = useState(0)
    const [highscore,setHighscore] = useState(0)

    return (
        <MessageContext.Provider value={[message,setMessage]}>
        <CardsContext.Provider value={[cards,setCards]}>
        <ScoreContext.Provider value={[score,setScore]}>
        <HighscoreContext.Provider value={[highscore,setHighscore]}>

        {children}
        </HighscoreContext.Provider>
        </ScoreContext.Provider>
            </CardsContext.Provider>    
            </MessageContext.Provider>
    )
}

export default Hooks