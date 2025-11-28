import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Header.jsx";
import RestaurantCard from "./RestaurantCard.jsx";



const FunctionalComponent= ()=>(
    <div className="appLayout">
        <Heading />
        <h2>Order your favourite food from here</h2>

        <Body />


    </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent />);