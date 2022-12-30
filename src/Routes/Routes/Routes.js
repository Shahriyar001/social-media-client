import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Auth from "../../pages/Auth/Auth";
import Home from "../../pages/home/Home";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import Signup from "../../pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/auth',
                element: <Auth></Auth>
            }

        ]

    }
])

export default router;