import RestaurantCard from "./RestaurantCard";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { RES_LIST } from "../utils/Const";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body= () =>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [searchText,setsearchText]=useState("");
    const [filterList,setfilterList]=useState([]);


    useEffect(()=>{
     fecthData();
    },[]);
    
    
    const fecthData=async ()=>{
        const data=await fetch (RES_LIST);
        const json=await data.json();
        // console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const isOnline=useOnlineStatus();
    if(!isOnline){
        return <h1>🔴 Offline, Please check your internet connection!!</h1>
    }
    
    
    return listOfRestaurants.length === 0?
    <h1>Loading Restaurants...</h1>:(
        <div className="body"> 
        <div className="filtering">
            <div className="searchBar">
                <input type="text" placeholder="Search for food items..." 
                className="searchBar"
                value={searchText}
                onChange={
                    (e)=>  {
                        setsearchText(e.target.value);
                    }

                }
                />
                <button className="filterBtn"
                onClick={
                    ()=>{
                        setfilterList(listOfRestaurants.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    );}


                }>SEARCH</button>
            </div>
                <button
                className="filterBtn"
                onClick={()=>{
                    const filteredList=filterList.filter(res=>res.info.avgRating>4.5);
                    setfilterList(filteredList);
                }}>top rating ({'>'}4.5)</button>
            
            </div>
            <div className="restaurantList">
                {filterList.map((restaurant)=> {
                    return <Link to={"/restaurants/:"+restaurant.info.id} key={restaurant.info.id}>
                        <RestaurantCard res={restaurant} />
                    </Link>;
                })}
                   
            </div>    
        </div>
    );
}
export default Body;