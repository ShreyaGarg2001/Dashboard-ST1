import './App.css'
import React from "react"
import NavBar from "../../components/other/NavBar"
import Main from "../main/Main"
import Employees from "../employees/Employees"
import Lines from "../lines/Lines"

function App() {
  const [currentState, changeState] = React.useState("ecommerceTab");

  function toggleChange(event) {
    changeState(event.target.id);
  }

  return (
    <div id="app">
      <NavBar currentState={currentState} toggleChange={toggleChange} />
      <div id="display">
        {currentState === "ecommerceTab" && <Main />}
        {currentState === "employeesTab" && <Employees />}
        {currentState === "linesTab" && <Lines />}
      </div>
    </div>
  )
}

export default App;
