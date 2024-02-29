import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Root from "../src/routes/root";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import Crew from "./components/Crew/Crew";
import Tech from "./components/Tech/Tech";
import Destination from "./components/Destination/Destination";




const router = createBrowserRouter([



  {
    path: "/",

    element: <NavBar/>,

    children:[
      {
  
        path:"/home",
        element:<Home/>,
        index:true,
    

      },
      {
  
        path:"/crew",
        element: <Crew/>,
    

      },
      {

        path:"/destination",
        element:<Destination />,
        
      },
      {

        path:"/tech",
        element:<Tech />,
        
      },
    ]
    
  },
  // {
  //   path:"/galaxy/home/",
  //   element:<Home/>,
  // },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)