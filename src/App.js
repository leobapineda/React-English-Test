import React from "react"
import Joke from "./components/Joke"
import jokesData from "./components/jokesData"

export default function App() {
    const jokeElements = jokesData.map(joke => {
        return (
            <Joke 
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
} 

   // id: 1,
    // setup: "I got my daughter a fridge for her birthday.",
    // punchline: "I can't wait to see her face light up when she opens it."