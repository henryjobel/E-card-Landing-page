import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import ProductDetails1 from "../Components/OurProducts/ProductDetailsPage/ProductDetailsPage";
import ProductCardDetails3 from "../Components/OurProducts/Wood/ProductCardDetails3";
import ProductDetails2 from "../Components/OurProducts/Metal/ProductDetails2";
import PurchesFrom from "../Components/PurchesForm/PurchesFrom";
import CheckOut from "../Pages/CheckoutPage/CheckOut";
import Purchaseform2 from "../Components/PurchesForm/Purchaseform2";
import Purchaseform3 from "../Components/PurchesForm/PurchesForm3";
import PvcCheckout from "../Pages/CheckoutPage/pvcCheckout";
import MetalCheckout from "../Pages/CheckoutPage/MetalCheckout";
import WoodCheckout from "../Pages/CheckoutPage/WoodCheckout";

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
        },
        {
          path:`metal-product-details/:id`,
          element:<ProductDetails2></ProductDetails2>,
          loader:()=> fetch('/metal.json')
        },
        {
          path:`wood-product-details/:id`,
          element:<ProductCardDetails3></ProductCardDetails3>,
          loader:()=> fetch('/wood.json')
        },
        {
          path:"purchase/:id/:price", // Include ":price" parameter in the URL
          element:<PurchesFrom></PurchesFrom>,
          loader:()=> fetch('/pvcCard.json')
        },
        {
          path:"purchase2/:id/:price",
          element:<Purchaseform2></Purchaseform2>,
          loader:()=> fetch('/metal.json')
        },
        {
          path:"purchase3/:id/:price",
          element:<Purchaseform3></Purchaseform3>,
          loader:()=> fetch('/wood.json')
        },
        {
          path: 'pvc-checkout/:id',
          element:<PvcCheckout></PvcCheckout>,
          loader:()=> fetch('/pvcCard.json')
        },
        {
          path: 'metal-checkout/:id',
          element:<MetalCheckout></MetalCheckout>,
          loader:()=> fetch('/metal.json')
        },
        {
          path: 'wood-checkout/:id',
          element:<WoodCheckout></WoodCheckout>,
          loader:()=> fetch('/wood.json')
        },
      ]
    },
  ]);


  export default router;