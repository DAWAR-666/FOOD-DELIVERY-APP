import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
const Body= () =>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);


    useEffect(()=>{
     fecthData();
    },[]);
    
    
    const fecthData=async ()=>{
        const data=await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    
    return listOfRestaurants.length === 0?
    <h1>Loading Restaurants...</h1>:(
        <div className="body"> 
            <div className="searchBar">
                <input type="text" placeholder="Search for food items..." />
                <button
                onClick={()=>{
                    const filteredList=listOfRestaurants.filter(res=>res.info.avgRating>4.5);
                    setListOfRestaurants(filteredList);
                }}>top rating ({'>'}4)</button>
            </div>
            <div className="restaurantList">
                {listOfRestaurants.map((restaurant)=> {
                    return <RestaurantCard key={restaurant.info.id}res={restaurant} />
                })}
                   
            </div>    
        </div>
    );
}
export default Body;