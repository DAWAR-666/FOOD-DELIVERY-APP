import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Header.jsx";
const RestaurantCard= () =>{
    return (
        <div className="restaurantCard">
            <img src="https://www.warmoven.in/cdn/shop/files/duel-delight-chocolate_-cake.jpg?v=1749833568&width=1080" alt="Food Item" />
            <h3>Food Item Name</h3>
            <p>Description of the food item.</p>
            <button>Add to Cart</button>
        </div>
    );
}
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