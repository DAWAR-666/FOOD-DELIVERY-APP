import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header.jsx";
import RestaurantCard from "./components/RestaurantCard.jsx";
import Body from "./components/Body.jsx";
import {createBrowserRouter ,RouterProvider} from "react-router-dom";

const AppLayout= ()=>(
    const router=createBrowserRouter([
        {
            path="/",
            element:<AppLayout />,
            errorElement:<Error />,
        },
        
    ])
    <div className="appLayout">
        <Heading />
        <h2>Order your favourite food from here</h2>
        <Body />
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(< />);