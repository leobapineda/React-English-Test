import React, { useEffect, useState } from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth ] = useState(window.innerWidth)


    useEffect(() => {

        function watchWidth() {
            console.log('setting up');
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', watchWidth)


        return function() {
            window.removeEventListener('resize', watchWidth)
            console.log('cleaning up');
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}