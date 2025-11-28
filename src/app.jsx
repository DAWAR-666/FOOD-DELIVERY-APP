import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Header.jsx";

const Body= () =>{
    return (
        <div className="body"> 
            <div className="searchBar">
                <input type="text" placeholder="Search for food items..." />
                <button>Search</button>
            </div>
            <div className="restaurantList">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                   
            </div>    
        </div>
    );
}

const FunctionalComponent= ()=>(
    <div className="appLayout">
        <Heading />
        <h2>Order your favourite food from here</h2>

        <Body />


    </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent />);