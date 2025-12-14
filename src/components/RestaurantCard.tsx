import { RES_IMG_URL } from "../utils/Const";
import { RestaurantCardData } from "../utils/types";

type resName= RestaurantCardData;

const RestaurantCard= ({resName}) =>{
    
    const {name,cloudinaryImageId,avgRating}=resName?.info;

    return (
        <div className="border-2 border-[#ddd] p-4 m-4 h-100 w-80 hover:shadow-lg text-center">
            <img src={RES_IMG_URL+cloudinaryImageId} alt="Food Item" 
            className="w-full h-[70%]" />
            <h3 className="m-1 text-xl">{name}</h3>
            
            <h4 className="text-lg">rating:{avgRating}</h4>
        </div>
    );
}
export const discountInfo=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label >
                    props
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    }
}
export default RestaurantCard;