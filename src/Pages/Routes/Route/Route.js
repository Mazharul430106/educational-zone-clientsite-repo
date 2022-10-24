import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Register from "../../Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            }

        ]
    },
    {
        path: '*',
        element: <div>Data Not Found</div>
    }

]);