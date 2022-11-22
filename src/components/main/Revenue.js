import React from "react";
import Graph1 from "../../assets/Graph1.png"
import Graph2 from "../../assets/Graph2.png"

export default function Revenue(props) {
    return (
        <div id="revenue">
            <h1>Revenue Updates</h1>
            <div id="revenue--content">
                <div id="revenue--left">
                    <div id="revenue--budget" className="reveue--text">
                        <div>
                            <p className="revenue--default">${props.budget}</p>
                            <p className="revenue--grey">Budget</p>
                        </div>
                        <p id="revenue--change" className={parseInt(props.budgetChange) >= 0 ? "green" : "red"}>{props.budgetChange}%</p>
                    </div>
                    <br></br>
                    <div  id="revenue--expense" className="reveue--text">
                        <div>
                            <p className="revenue--default">${props.expense}</p>
                            <p className="revenue--grey">Expense</p>
                        </div>
                    </div>
                    <img id="revenue--graph1" src={Graph1}></img>
                    <br></br>
                    <button id="revenue--btn" className="btn">Download Report</button>
                </div>
                <div id="revenue--right">
                    <img  id="revenue--graph2" src={Graph2}></img>
                </div>
            </div>
        </div>
    )
}