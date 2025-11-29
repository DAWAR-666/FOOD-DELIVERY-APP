import resData from "../utils/mockData.js";
const RestaurantCard= (props) =>{
    const resData=props;
    const {name,description,rating}=resData;
    return (
        <div className="restaurantCard">
            <img src="https://www.warmoven.in/cdn/shop/files/duel-delight-chocolate_-cake.jpg?v=1749833568&width=1080" alt="Food Item" />
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>{rating}</h4>
        </div>
    );
}
export default RestaurantCard;