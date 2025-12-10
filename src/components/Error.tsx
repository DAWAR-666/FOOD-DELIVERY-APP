import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    return(
        <div>
            <h1>Oops! Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p>{err.status}:{err.statusText}</p>
        </div>
    );
}
export default Error;