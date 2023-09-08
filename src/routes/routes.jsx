import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute.jsx'
import Profile from "../pages/Profile.jsx";
import Landing from "../pages/Landing.jsx";
import Layout from "../pages/Layout.jsx";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Landing/>
            },
            {
                path: "app",
                element: <Profile />,
            },
            {
                path: "secure",
                element: <ProtectedRoute pass={false}><Profile /></ProtectedRoute>
            }
        ]
    },


]);

