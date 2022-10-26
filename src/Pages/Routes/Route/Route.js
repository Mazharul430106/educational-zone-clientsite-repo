import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Blog from "../../Blog/Blog";
import Courses from "../../Courses/Courses";
import Faq from "../../Faq/Faq";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import TramsAndConditions from "../../TramsAndConditions/TramsAndConditions";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch(`http://localhost:5000/data`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ()=> fetch(`http://localhost:5000/data`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/trams',
                element: <TramsAndConditions></TramsAndConditions>
            }

        ]
    },
    {
        path: '*',
        element: <div>Data Not Found</div>
    }

]);