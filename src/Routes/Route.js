import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Subscribe from "../Pages/Home/Subscribe/Subscribe";
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
    }
])