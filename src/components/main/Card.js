import React from "react";

export default function Card(props) {
    return (
        <div id="card">
            <div id="card--text">
                <p>
                    {props.value}
                    <span id="card--change" className="card--grey">{props.change}%</span>
                </p>
                <p id="card--category" className="card--grey">
                    {props.category}
                </p>
            </div>
            <br></br>
            <div id="card--image">
                <img src={props.image}></img>
            </div>
        </div>
    )
}