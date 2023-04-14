import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import HeaderComp from "./components/HeaderComp/HeaderComp";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<HeaderComp />
			<Outlet />
		</>
	);
}

export default App;
