import {Link} from "react-router-dom";
import { APP_LOGO_URL } from "../utils/Const";
import useOnlineStatus from "../utils/useOnlineStatus";
const Heading= () =>{
    return (
        <div className="flex items-center justify-between p-4 bg-[#ff6347] shadow-md text-white">
            <div className="">
                <img src={APP_LOGO_URL} alt="App Logo" className="h-32 rounded-xl"/>
            </div>
            <h1 className="text-4xl font-bold font-serif">Food Delivery App</h1>
            <ul className="flex text-xl font-semibold cursor-pointer">
                <li className="m-3.5  hover:text-gray-200 hover:underline">
                    ONLINE: {useOnlineStatus() ? "✅" : "🔴"}
                </li>
                <li className="m-3.5  hover:text-gray-200 hover:underline">
                    <Link to="/">HOME</Link>
                </li>
                <li className="m-3.5  hover:text-gray-200 hover:underline">
                    <Link to="/about">ABOUT US</Link>
                </li >
                <li className="m-3.5  hover:text-gray-200 hover:underline">
                    <Link to="/contact">CONTACT US</Link>
                </li>
                <li className="m-3.5  hover:text-gray-200 hover:underline">
                    <button className="loginbtn">LOGIN</button>
                </li>
            </ul>
        </div>
        
    );
};
export default Heading;