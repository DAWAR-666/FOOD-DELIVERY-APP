import {Link} from "react-router-dom";
import { APP_LOGO_URL } from "../utils/Const";
const Heading= () =>{
    return (
        <div className="header">
            <div className="Logo">
                <img src={APP_LOGO_URL} alt="App Logo" />
            </div>
            <h1>Food Delivery App</h1>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT US</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT US</Link>
                </li>
                <li>
                    <button className="loginbtn">LOGIN</button>
                </li>
            </ul>
        </div>
        
    );
};
export default Heading;