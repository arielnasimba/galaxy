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
    path: "/galaxy",
    element: <Home />,

  },

  {
    path: "/galaxy/destination/:id",
    element: <Destination/>,

  },
  {
    path: "/galaxy/crew/:id",
    element: <Crew/>,

  },
  {
    path: "/galaxy/tech/:id",
    element: <Tech />,

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
