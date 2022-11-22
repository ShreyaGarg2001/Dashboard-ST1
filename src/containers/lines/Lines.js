import React from "react";
import LinesGraph from "../../assets/LinesGraph.png"

export default function Lines() {
    return (
        <div id="lines">
            <h1>Lines</h1>
            <div id="lines--content">
                <p className="lines--default">Charts</p>
                <p className="lines--grey">Inflation Rate</p>
                <div id="linesImg--container">
                    <img id="linesImg" src={LinesGraph}></img>
                </div>
            </div>
        </div>
    )
}