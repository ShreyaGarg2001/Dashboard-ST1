import React from "react";
import Banner from "../../assets/Banner.png"

export default function Earning(props) {
    return (
        <div id="earning">
            <div id="earning--left">
                <p>Earnings</p>
                <p id="earning--value">${props.earning}</p>
                <button className="btn">Download</button>
            </div>
            <div id="earning--right" style={{ backgroundImage: `url(${Banner})` }}></div>
        </div>
    )
}