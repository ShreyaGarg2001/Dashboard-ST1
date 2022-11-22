import React from "react"
import Logo from "../../assets/shopping-planet-logo.png"
import BagIcon from "../../assets/e-commerce-default.png"
import EmployeeIcon from "../../assets/employee-default.png"
import LinesIcon from "../../assets/line-default.png"
import HamburgerIcon from "../../assets/hamburger.png"
import CartIcon from "../../assets/cart.png"
import ChatIcon from "../../assets/message.png"
import BellIcon from "../../assets/bell-notification.png"
import ProfileIcon from "../../assets/avatar.png"
import DownIcon from "../../assets/dropdown-arrow.png"
import CrossIcon from "../../assets/cross.png"

export default function NavBar(props) {

    function updateDisplay(sidePanelWidth) {
        const display = document.getElementById("display");
        if (sidePanelWidth == "0px" || window.innerWidth <= 600) {
            display.style.float = "none";
        } else {
            display.style.float = "right";
        }
    }

    React.useEffect(function () {

        document.getElementById("navbar--collapse").addEventListener("click", function () {
            const sidePanel = document.getElementById("navbar--left");
            sidePanel.style.width = sidePanel.style.width === "0px" ? "300px" : "0px";
            updateDisplay(sidePanel.style.width);
        })

        document.getElementById("navbar--close").addEventListener("click", function () {
            const sidePanel = document.getElementById("navbar--left");
            sidePanel.style.width = "0px";
            updateDisplay(sidePanel.style.width);
        })

    }, [])

    return (
        <div id="navbar">
            <div id="navbar--left">
                <div id="navbar--side">
                    <img src={Logo}></img>
                    <img src={CrossIcon} id="navbar--close"></img>
                    <div id="navbar--side-pane">
                        <p className={props.currentState == "ecommerceTab" && "navbar--selected"} id="ecommerceTab" onClick={props.toggleChange}>
                            <img src={BagIcon}></img>
                            Ecommerce
                            <img id="selected-arrow" src={DownIcon}></img>
                        </p>
                        <p className={props.currentState == "employeesTab" && "navbar--selected"} id="employeesTab" onClick={props.toggleChange}>
                            <img src={EmployeeIcon}></img>
                            Employees
                            <img id="selected-arrow" src={DownIcon}></img>
                        </p>
                        <p className={props.currentState === "linesTab" && "navbar--selected"} id="linesTab" onClick={props.toggleChange}>
                            <img src={LinesIcon}></img>
                            Lines
                            <img id="selected-arrow" src={DownIcon}></img>
                        </p>
                    </div>
                </div>
            </div>
            <div id="navbar--right">
                <div id="navbar--main">
                    <img id="navbar--collapse" src={HamburgerIcon} height="25px"></img>
                    <div>
                        <div id="navbar--navigation">
                            <img src={CartIcon} style={{height:"2em"}}></img>
                            <img src={ChatIcon} style={{height:"2em"}}></img>
                            <img src={BellIcon} style={{height:"2em"}}></img>
                        </div>
                        <div id="navbar--profile">
                            <img src={ProfileIcon} height="30px"></img>
                            <p id="navbar--profile-text">Ankit Yadav</p>
                            <p id="navbar--expand-profile">
                                <img src={DownIcon}></img>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}