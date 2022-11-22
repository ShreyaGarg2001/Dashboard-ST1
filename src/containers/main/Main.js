import React from "react";
import Card from "../../components/main/Card";
import Earning from "../../components/main/Earning";
import CustomerIcon from "../../assets/customers.png";
import ProductIcon from "../../assets/products.png";
import SalesIcon from "../../assets/sales.png";
import RefundIcon from "../../assets/refunds.png";  
import Revenue from "../../components/main/Revenue";

export default function Main() {
    return (
        <div id="main">
            <Earning earning={"14 000,00"} />
            <div id="card-container">
                <Card value={"39,354"} change={"-4"} category={"Customers"} image={CustomerIcon} />
                <Card value={"4,396"} change={"+23"} category={"Products"} image={ProductIcon} />
                <Card value={"423,39"} change={"+38"} category={"Sales"} image={SalesIcon} />
                <Card value={"39,354"} change={"-4"} category={"Refunds"} image={RefundIcon} />
            </div>
            <Revenue budget={"93,438"} budgetChange={"23"} expense={"48,438"} />
        </div>
    )
}