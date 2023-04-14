import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./Styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/Themes";
import { Context } from "./context/Context";
import {
	createBrowserRouter,
	Router,
	RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Mouses from "./pages/Mouses";
import Headsets from "./pages/Headsets";
import Teclados from "./pages/Teclados";
import Monitores from "./pages/Monitores";
import DetailsProduct from "./pages/DetailsProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BuyPage from "./pages/BuyPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/mouses",
				element: <Mouses />,
			},
			{
				path: "/headsets",
				element: <Headsets />,
			},
			{
				path: "/teclados",
				element: <Teclados />,
			},
			{
				path: "/monitores",
				element: <Monitores />,
			},
			{
				path: "/detailsProduct",
				element: <DetailsProduct />,
			},
			{
				path: "/buypage",
				element: <BuyPage />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Context>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<RouterProvider router={router}>
					<App />
				</RouterProvider>
			</ThemeProvider>
		</Context>
	</React.StrictMode>
);
