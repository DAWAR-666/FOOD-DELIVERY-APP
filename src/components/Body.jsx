import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState } from "react";
const Body= () =>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const fecthData=async ()=>{
        const data=await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
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