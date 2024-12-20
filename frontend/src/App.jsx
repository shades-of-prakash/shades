import { useState } from "react";
import "./styles/globals.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ProductLayout from "./components/ProductLayout";
import SingleProduct from "./pages/SingleProduct";
import NotFound from "./pages/NotFound";
import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import { productLoader } from "./Loaders/ProductLoader";
import { loginAction } from "./actions/loginAction.js";
import SignUp from "./pages/SignUp.jsx";
import { signupAction } from "./actions/signupAction.js";
import { AuthProvider, useAuth } from "./hooks/UseAuth.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import RedirectIfAuthenticated from "./components/RedirecToHome.jsx";
import AccountDeatils from "./pages/AccountDeatils.jsx";
import DeliveryPage from "./pages/DeliveryPage.jsx";
import Orders from "./pages/Orders.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import AiPage from "./pages/AiPage.jsx";
import PersonalityOutfit from "./pages/PersonalityOutfit.jsx";
import Occasion from "./pages/Occasion.jsx";
import Bodyshape from "./pages/Bodyshape.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFound />,
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
				path: "/:gender",
				element: <ProductLayout />,
				loader: productLoader,
			},
			{
				path: "/:gender/:category",
				element: <ProductLayout />,
				loader: productLoader,
			},
			{
				path: "/product/:productId",
				element: <SingleProduct />,
			},
			{
				path: "/shadesai",
				element: <AiPage />,
				children: [
					{
						index: true,
						element: <Occasion />,
					},

					{
						path: "personality_outfits",
						element: <PersonalityOutfit />,
					},
					{
						path: "occasion_outfits",
						element: <Occasion />,
					},
					{
						path: "bodyshape_outfits",
						element: <Bodyshape />,
					},
				],
			},
			{
				path: "/account",
				element: (
					<ProtectedRoute>
						<AccountPage />
					</ProtectedRoute>
				),
				children: [
					{
						index: true,
						element: <AccountDeatils />,
					},
					{
						path: "account_details",
						index: true,
						element: <AccountDeatils />,
					},
					{
						path: "delivery_address",
						element: <DeliveryPage />,
					},
					{
						path: "orders",
						element: <Orders />,
					},
					{
						path: "cart",
						element: <CartPage />,
					},
					{
						path: "wishlist",
						element: <WishlistPage />,
					},
				],
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
	{
		path: "/login",
		element: (
			<RedirectIfAuthenticated>
				<Login />
			</RedirectIfAuthenticated>
		),
		action: loginAction,
	},

	{
		path: "/signup",
		element: (
			<RedirectIfAuthenticated>
				<SignUp />
			</RedirectIfAuthenticated>
		),
		action: signupAction,
	},
]);

function App() {
	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	);
}

export default App;
