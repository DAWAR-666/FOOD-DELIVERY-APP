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
        console.log(json);
        setMenuData(json?.data);
    }
    if(!menuData){
        return <h1>Loading Menu...</h1>;
    };
    const {name,avgRating,cuisines}=menuData?.cards[2]?.card?.card?.info;
    const items=menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((e) =>
    e.card?.card?.hasOwnProperty("itemCards"));
    console.log(menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((e) =>
    e.card?.card?.hasOwnProperty("itemCards")))
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>Cuisine: {cuisines.join(", ")}</h3>
            <h3>Average Rating: {avgRating}⭐</h3>
            <h2>Menu Items</h2>
            <ul>
                {items.map((e)=>(
                    <li key={e.card.card.categoryId}> {e.card.card.itemCards.map((p)=>(

                        <div key={p.card.info.id}>
                            <h4>{p.card.info.name} - ₹{p.card.info.price/100 || p.card.info.defaultPrice/100}</h4>
                            
                        </div>
                    ))}</li>
                ))}
            </ul>
        </div>
    );
};
export default RestaurantMenu;