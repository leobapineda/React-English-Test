import React, { useEffect, useState } from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth ] = useState(window.innerWidth)


    useEffect(() => {

        function watchWidth() {
            setWindowWidth(window.innerWidth)
            console.log('setting up');
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