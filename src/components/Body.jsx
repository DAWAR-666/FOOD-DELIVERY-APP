import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState } from "react";
const Body= () =>{
    const [listOfRestaurants,setListOfRestaurants]=useState(resData);
    return (
        <div className="body"> 
            <div className="searchBar">
                <input type="text" placeholder="Search for food items..." />
                <button
                onClick={()=>{
                    const filteredList=listOfRestaurants.filter(res=>res.rating>4);
                    setListOfRestaurants(filteredList);
                }}>top rating ({'>'}4)</button>
            </div>
            <div className="restaurantList">
                {listOfRestaurants.map((restaurant)=> {
                    return <RestaurantCard key={restaurant.id}res={restaurant} />
                })}
                   
            </div>    
        </div>
    );
}
export default Body;