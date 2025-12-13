
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu=()=>{
    const {resId}=useParams<{resId:string}>();
    if(!resId){
        return <h1>Invalid Restaurant ID</h1>;
    }
    const menuData=useRestaurantMenu(resId);
    if(!menuData){
        return <h1>Loading Menu...</h1>;
    };
    const {name,avgRating,cuisines}=menuData?.cards[2]?.card?.card?.info;
    const items=menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((e) =>
    e.card?.card?.hasOwnProperty("itemCards"));
    console.log(menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((e) =>
    e.card?.card?.hasOwnProperty("itemCards")))
    return(
        <div className="p-4 m-4">
            <div className="flex justify-center flex-col items-center mb-4">
            <h1 className="text-4xl">{name}</h1>
            <h3 className="text-lg">Cuisine: {cuisines.join(", ")}</h3>
            <h3 className="text-lg">Average Rating: {avgRating}⭐</h3>
            <h2 className="text-2xl">Menu Items</h2>
            </div>
            <ul className="p-2 text-lg ">
                {items.map((e)=>(
                    <li  key={e.card.card.categoryId}> {e.card.card.itemCards.map((p)=>(

                        <div key={p.card.info.id}>
                            <h4 >{p.card.info.name} - ₹{p.card.info.price/100 || p.card.info.defaultPrice/100}</h4>
                            
                        </div>
                    ))}</li>
                ))}
            </ul>
        </div>
    );
};
export default RestaurantMenu;