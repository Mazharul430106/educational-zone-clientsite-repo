import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Blog from "../../Blog/Blog";
import CheckOutPage from "../../CheckOutPage/CheckOutPage";
import Courses from "../../Courses/Courses";
import Faq from "../../Faq/Faq";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import TramsAndConditions from "../../TramsAndConditions/TramsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CourseRegistation from "../../CourseRegistation/CourseRegistation";
import MyCourses from "../../MyCourses/MyCourses";
import MyReviews from "../../MyReviews/MyReviews";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch(`http://localhost:5000/ourcourses`)
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
                loader: ()=> fetch(`http://localhost:5000/ourcourses`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/trams',
                element: <TramsAndConditions></TramsAndConditions>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOutPage></CheckOutPage></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/ourcourses/${params.id}`)
            },

            {
                path:'/courseRegister/:id',
                element:<PrivateRoute><CourseRegistation></CourseRegistation></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/ourcourses/${params.id}`)
            },
            {
                path: '/myCourses',
                element:<PrivateRoute><MyCourses></MyCourses></PrivateRoute>
            },
            {
                path: '/myReviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            }

        ]
    },
    {
        path: '*',
        element: <div className="text-center fs-1">Data Not Found</div>
    }

]);