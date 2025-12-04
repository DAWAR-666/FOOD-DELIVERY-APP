import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { FETCH_MENU_URL } from "../utils/Const";
const RestaurantMenu=()=>{
    const {resId}=useParams();
    const [menuData,setMenuData]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu=async()=>{
        const url=FETCH_MENU_URL + resId.slice(1);
    
        const abcd=await fetch(url);
        const json=await abcd.json();
        // console.log(json);
        setMenuData(json?.data);
    }
    if(!menuData){
        return <h1>Loading Menu...</h1>;
    };
    const {name,avgRating,cuisines}=menuData?.cards[2]?.card?.card?.info;
    const {items}=menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((e) =>
    e.card?.card?.hasOwnProperty("itemCards")))
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>Cuisine: {cuisines.join(", ")}</h3>
            <h3>Average Rating: {avgRating}⭐</h3>
            <h2>Menu Items</h2>
            <ul>
                
            </ul>
        </div>
    );
};
export default RestaurantMenu;