import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Faq from "../pages/Faq";
import AllCategories from "../components/AllCategories";
import ProductDetails from "../components/ProductDetails";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=>  fetch('../categories.json'),
                children:[
                    {
                        path:'/',
                        element: <AllCategories></AllCategories>,
                        loader: () =>  fetch('../gadget.json'),
                    },
                    {
                        path:'/category/:category',
                        element: <AllCategories></AllCategories>,
                        loader: () =>  fetch('../gadget.json'),
                    },
                ]
            },
            {
                path:'/statistics',
                element: <Statistics></Statistics>
            },
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>,
                loader: ()=>  fetch('../gadget.json')
            },
            {
                path:'/faq',
                element: <Faq></Faq>
            },
            {
                path:'/product/:product_id',
                element: <ProductDetails></ProductDetails>,
                loader: () =>  fetch('../gadget.json'),
            },
        ]
    },
]);

export default router;