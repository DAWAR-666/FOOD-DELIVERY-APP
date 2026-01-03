import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
const Cart = () => {
    const dispatch=useDispatch();
    const handleClick=(item)=>{
        //dispatch an action to add item to cart

        dispatch(addItem(item));
    }
    const data=useSelector((store)=>store.cart.items);
    return (
    <div>
        {data.map((p)=>(
                        
                        <div key={p.id} className="flex
                                            bg-amber-50 
                                            justify-between
                                            items-center 
                                            border-amber-500 
                                            border-2 
                                            m-2 
                                            p-2 
                                            rounded-md 
                                            hover:bg-amber-100 
                                            hover:scale-105 
                                            transition-transform 
                                            duration-200">
                            <h4 >
                                {p.name} </h4><h4> ₹{p.price/100 || p.defaultPrice/100}
                                <div>
                                <button className="border-2 rounded-md p-2 text-sm
                                                     hover:bg-amber-100 
                                            hover:scale-115 
                                            transition-transform 
                                            duration-200" 
                                            onClick={()=>handleClick(p)}>
                                                ADD +
                                                </button>
                                </div>
                            </h4>
                        </div>))}
    </div>
    );
};
export default Cart;