import { useState } from "react";
import "./styles/globals.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ProductLayout from "./components/ProductLayout";
import ContentLayout from "./components/ContentLayout";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import Login from "./components/Login";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/men",
                element: <ProductLayout />,
                children: [
                    {
                        path: "",
                        element: <ContentLayout category="Men" />,
                    },
                    {
                        path: ":category",
                        element: <ContentLayout />,
                    },
                ],
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
