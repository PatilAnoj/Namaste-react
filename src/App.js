import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import HomepageBody from "./components/HomepageBody";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";



const App=()=>{
  return(
    <div>
      <Header/>
      <Search/>
      <Outlet/>
    </div>
  )
}

const appRoute=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        index: true, // Default route for "/"
        element: <HomepageBody />,
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurantdetails/:resid",
        element:<RestaurantDetails/>
      }
    ],
    errorElement:<Error/>
  },
  {
    future: {
      v7_startTransition: true, // Opt-in to the v7 startTransition feature
    },
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>);

