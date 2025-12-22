import RestaurantCard, { discountInfo } from "./RestaurantCard";
import {Link} from "react-router-dom";
import { useState, useEffect,useContext } from "react";
import { RES_LIST } from "../utils/Const";
import useOnlineStatus from "../utils/useOnlineStatus";
import {RestaurantCardData,CardInfo} from "../utils/types";
import UserContext from "../utils/UserContext";
const Body= () =>{
    const [listOfRestaurants,setListOfRestaurants]=useState<RestaurantCardData[]> ([]);
    const [searchText,setsearchText]=useState<string>("");
    const [filterList,setfilterList]=useState<RestaurantCardData[]> ([]);
    const DiscountedRestaurant=discountInfo(RestaurantCard);


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
    const isOnline : boolean=useOnlineStatus();
    if(!isOnline){
        return <h1>🔴 Offline, Please check your internet connection!!</h1>
    }
    const {setUserName,user}=useContext(UserContext);
    
    return listOfRestaurants.length === 0?
    <h1 className="text-4xl flex justify-center m-20">Loading Restaurants...</h1>:(
        <div className="body"> 
        <div className="flex justify-center items-center gap-9 m-4 text-xl">
            <div className="gap-3 flex">
                <input type="text" placeholder="Search for food items..." 
                className="w-60 p-2 border-2 border-gray-400 rounded-md"
                value={searchText}
                onChange={
                    (e)=>  {
                        setsearchText(e.target.value);
                    }

                }
                />
                <button className="p-2 
                                    border-2 
                                    border-gray-400 
                                    rounded-md 
                                    bg-white 
                                    hover:bg-[#fb8a76] 
                                    cursor-pointer
                                    hover:scale-105
                                   "
                onClick={
                    ()=>{
                        setfilterList(listOfRestaurants.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    );}


                }>SEARCH</button>
            </div>
                <button
                className="p-2 
                            border-2 
                            border-gray-400 
                            rounded-md 
                            bg-white 
                            hover:bg-[#fb8a76] 
                            cursor-pointer
                            hover:scale-105"
                onClick={()=>{
                    const filteredList=filterList.filter(res=>res.info.avgRating>4.5);
                    setfilterList(filteredList);
                }}>top rating ({'>'}4.5)</button>
                <div className="p-2 
                            border-2 
                            border-gray-400 
                            rounded-md 
                            bg-white ">
                <label >UserName: </label>
                <input type="text" className="p-2 
                            border-2 
                            border-gray-400 
                            rounded-md 
                            bg-white "
                    onChange={(e)=> setUserName(e.target.value)}
                        value={user} />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 p-5">
                {filterList.map((restaurant)=> {
                    return <Link to={"/restaurants/:"+restaurant.info.id} key={restaurant.info.id}>
                        {restaurant.info.hasOwnProperty("aggregatedDiscountInfoV3")? (<DiscountedRestaurant resName={restaurant}/>) :(<RestaurantCard resName={restaurant} /> )}
                    </Link>;
                })}
                   
            </div>    
        </div>
    );
}
export default Body;