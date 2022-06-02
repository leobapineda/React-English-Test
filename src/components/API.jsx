import React from "react"

export default function App() {
    const [starWardata, setStarWardata] = React.useState({})
    console.log('api');
    fetch('https://swapi.dev/api/people/20')
    .then(response => response.json())
    .then(data => console.log(data))

    return (
        <div>
            <pre>{JSON.stringify(starWardata, null, 2)}</pre>
        </div>
    )
}
 