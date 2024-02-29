import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Root from "../src/routes/root";
import Home from "./components/Home/Home";




const router = createBrowserRouter([
  {
    path: "/galaxy/",
    element: <Root />,
  },
  // {
  //   path: "/",
  //   element: <Home/>,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
