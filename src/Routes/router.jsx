import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import ProductDetails1 from "../Components/OurProducts/ProductDetailsPage/ProductDetailsPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: "/",
            element:<Home></Home>
            
        },
        {
          path:`pvc-product-details/:id`,
          element:<ProductDetails1></ProductDetails1>,
          loader:()=> fetch('/pvcCard.json')
        }
      ]
    },
  ]);


  export default router;