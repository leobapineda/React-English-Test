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
            <button onClick={togglePunchline} >{isShown ? 'Hide' : 'Show'} punchline</button>
            {isShown && <p>{props.punchline}</p>}
            <hr />
        </div>
    )
}
