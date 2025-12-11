import { RES_IMG_URL } from "../utils/Const";
import { RestaurantCardData } from "../utils/types";

type Props = {
    res: RestaurantCardData;
}
const RestaurantCard:React.FC<Props>= ({res}) =>{
    
    const {name,cloudinaryImageId,avgRating}=res?.info;

    return (
        <div className="restaurantCard">
            <img src={RES_IMG_URL+cloudinaryImageId} alt="Food Item" />
            <h3>{name}</h3>
            
            <h4>rating:{avgRating}</h4>
        </div>
    );
}
export default RestaurantCard;