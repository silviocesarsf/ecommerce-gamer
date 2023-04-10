import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import HeaderComp from "./components/HeaderComp/HeaderComp";
import { Outlet } from "react-router-dom";
import BuyPage from "./pages/BuyPage";
import Login from "./pages/Login";

function App() {
	return (
		<>
			<HeaderComp />
			{/* <Outlet /> */}
			<Login />
		</>
	);
}

export default App;
