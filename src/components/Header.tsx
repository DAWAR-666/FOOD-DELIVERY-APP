import {Link} from "react-router-dom";
import { APP_LOGO_URL } from "../utils/Const";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Heading= () =>{
    const {user}=useContext(UserContext);
    return (
        <div className="flex items-center justify-between p-4 bg-[#ff6347] shadow-md text-white">
            <div className="flex-1">
                <img src={APP_LOGO_URL} alt="App Logo" className="h-32 rounded-xl"/>
            </div>
            <h1 className="text-4xl font-bold font-serif">Food Delivery App</h1>
            <div className="flex-1 flex justify-end">
                <ul className="flex flex-1 text-lg font-semibold cursor-pointer ">
                    <li className="m-2 ">
                        ONLINE: {useOnlineStatus() ? "✅" : "🔴"}
                    </li>
                    <li className="m-2  
                                    hover:text-gray-200 
                                    hover:scale-105 
                                    transition-transform 
                                    duration-200">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="m-2  
                                    hover:text-gray-200 
                                    hover:scale-105 
                                    transition-transform 
                                    duration-200">
                        <Link to="/about">ABOUT US</Link>
                    </li >
                    <li className="m-2  
                                    hover:text-gray-200 
                                    hover:scale-105 
                                    transition-transform 
                                    duration-200">
                        <Link to="/contact">CONTACT US</Link>
                    </li>
                    <li className="m-2  
                                    hover:text-gray-200 
                                    hover:scale-105 
                                    transition-transform 
                                    duration-200">
                        <button className="loginbtn">LOGIN</button>
                    </li>
                    <li>
                        <span className="m-2  
                                    hover:text-gray-200 
                                    hover:scale-105
                                    transition-transform
                                    duration-200">
                            {user}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        
    );
};
export default Heading;