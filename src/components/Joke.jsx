import {React, useState} from "react"
import '../style/Joke.css'
export default function Joke(props) {
    const [isShown, setIsShown] = useState(false)

    function togglePunchline() {
        setIsShown((prevIsShown) => !prevIsShown)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {/* <p>{props.punchline}</p> */}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={togglePunchline} >Show punchline</button>
            <hr />
        </div>
    )
}


    // id: 1,
    // setup: "I got my daughter a fridge for her birthday.",
    // punchline: "I can't wait to see her face light up when she opens it."
