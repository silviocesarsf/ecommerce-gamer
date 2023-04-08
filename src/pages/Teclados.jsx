import React from "react";
import { Section } from "../Styles/Style";
import ProductsList from "../components/ProductsList/ProductsList";
import { useLocation } from "react-router-dom";

export default function Teclados() {
	const location = useLocation();
	const currentPath = location.pathname;

	const changeStyle = {
		backgroundColor: currentPath !== "/" && "#4a6396",
	};

	return (
		<Section style={changeStyle}>
			<ProductsList product="Teclado gamer" />
		</Section>
	);
}
