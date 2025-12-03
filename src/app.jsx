import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter ,Outlet,RouterProvider} from "react-router-dom";   
import Heading from "./components/Header.jsx";
import RestaurantCard from "./components/RestaurantCard.jsx";
import Body from "./components/Body.jsx";
import Contact from "./components/Contact.jsx";

import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
const AppLayout= ()=>(
    
    <div className="appLayout">
        <Heading />
        <h2>Order your favourite food from here</h2>
        <Outlet />
    </div>
);
const approuter=createBrowserRouter([
        {
            path:"/",
            element:<AppLayout />,
            children:[
              {
                path:"/",
                element:<Body />
              },
              {
                path:"about",
                element:<About />
              } ,
              {
                path:"contact",
                element:<Contact />
              }
            ],
            errorElement:<Error />,
        }        
    ]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);