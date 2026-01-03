import { useDispatch, useSelector } from "react-redux";
import { addItem,clearCart} from "../utils/cartSlice";
const Cart = () => {
    const dispatch=useDispatch();
    const handleclearCart=()=>{
        //dispatch an action to clear the cart
        dispatch(clearCart());

    };
    const handleClick=(item)=>{
        //dispatch an action to add item to cart

        dispatch(addItem(item));
    };
    const data=useSelector((store)=>store.cart.items);
    return (
    <div className="w-6/12 m-auto bg-amber-100 rounded-md mb-2   ">
            <h2 className="text-3xl text-center font-bold m-2 p-2 border-amber-500 border-2 rounded-md bg-amber-50">
                    Cart Items
                </h2>
                <div className="flex justify-center">
                    <button 
                        className="m-2 p-2 border-2 rounded-md hover:bg-red-500 hover:text-white"
                        onClick={handleclearCart}
                    >
                        Clear Cart
                    </button>
</div>
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