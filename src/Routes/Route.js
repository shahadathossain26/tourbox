import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Subscribe from "../Pages/Home/Subscribe/Subscribe";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    // {
    //     path: '/',
    //     element: <Main></Main>,
    //     children: [
    //         {
    //             path: '/blog',
    //             element: <Subscribe></Subscribe>
    //         }

    //     ]
    // }

    {
        path: '/services',
        element: <Services></Services>
    },
    {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`services.json/services/${params.id}`)
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
])