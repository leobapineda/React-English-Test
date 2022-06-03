import React from "react"
import WindowTracker from "./WindowTracker"

export default function WindowTracker2() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */
    
    return (
        <div className="container">
            <button>
                Toggle WindowTracker
            </button>
            <WindowTracker />
        </div>
    )
}
