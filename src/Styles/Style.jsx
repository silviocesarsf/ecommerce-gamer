import styled from "styled-components";
import { darken } from "polished";

export const Header = styled.header`
	background: #4a6396;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80px;
	width: 100%;
	padding: 0.6rem 3rem;
	gap: 1rem;

	.logo-header {
		text-transform: uppercase;
		padding: 10px 20px;
		color: white;
	}

	.logo-header h2 {
		font-weight: 300;
	}

	.links-header a {
		text-align: center;
		width: 150px;
		margin: 0 1.24rem;
		color: ${(props) => props.theme.colors.text};
		padding: 0;
		font-size: 1.1em;
		box-sizing: border-box;
		transition: 0.5s;
	}

	.links-header a:hover {
		border-radius: 30px;
		background: #ffffffa4;
		padding: 10px 20px;
		color: black;
		font-weight: bold;
	}

	.search-icon {
		font-size: 1.3em;
		transition: 0.5s;
		height: 40px;
		width: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.search-icon:hover {
		border-radius: 100%;
		background: #ffffffd8;
		color: black;
	}

	.search-icon:active {
		transition: 0.1s;
		background: #ffffffb2;
	}

	.login-header {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.56rem;
	}
`;

export const Container = styled.div``;

export const Wrapper = styled.main`
	.buy-page {
		color: black;
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 1rem;
	}
`;

export const Section = styled.section`
	min-height: 100vh;
	width: 100%;
	padding: 0rem 3rem;
	background-color: ${(props) =>
		props.background ? props.background : ""};

	.content-home {
		min-height: 80vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.text-home {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		gap: 2rem;
	}

	.text-home h1 {
		text-transform: uppercase;
		text-align: center;
		max-width: 70%;
		font-size: 2em;
		font-weight: bold;
	}

	.text-home p {
		font-weight: 300;
		font-size: 1.3em;
	}

	.hero-home img {
		filter: drop-shadow(0px 6px 2px black);
	}

	.mouse-hero {
	}

	.keyboard-hero {
		max-height: 400px;
		transform: rotate(10deg);
	}

	.left-buy_page,
	.right-buy_page {
		background: white;
		height: 90vh;
		padding: 2rem;
		box-shadow: 1px 2px 3px #72727275;
		border-radius: 5px;
		display: flex;
		align-items: flex-start;
		justify-content: center;
	}

	.left-buy_page .photo-buy_page img {
		max-height: 100%;
	}

	.right-buy_page {
		min-width: 20vw;
		flex-direction: column;
		justify-content: flex-start;
	}

	.price-buy_page .old-price {
		text-decoration: line-through;
	}
`;

export const Button = styled.button`
	height: 40px;
	width: 120px;
	padding: 10px;
	background: transparent;
	border-radius: 2px;
	font-size: 1em;
	border: ${(props) =>
		props.border === false ? "" : "1px solid white"};
	color: ${(props) => (props.colorBtn ? props.colorBtn : "white")};
	transition: 0.5s;

	&:hover {
		background-color: #0000006c;
	}
`;

export const GridProducts = styled.div`
	padding-top: 2rem;
	min-height: 80vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	place-items: center;
	gap: 1rem;
`;

export const CardProducts = styled.div`
	background: white;
	height: 300px;
	width: 44vw;
	display: flex;
	align-items: center;
	box-shadow: 1px 2px 1px #2c2c2c;
	position: relative;
	flex: none;
	padding: 1rem;
	border-radius: 5px;

	.photo-product {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.photo-product img {
		max-height: 100px;
	}

	.info-product {
		position: absolute;
		right: 0%;
		color: white;
		height: 100%;
		background: #354870;
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-direction: column;
		gap: 1rem;
		width: 50%;
		text-align: center;
		padding: 3rem 0;
	}

	.name-product {
		text-transform: uppercase;
		max-width: 80%;
		font-weight: bold;
	}

	.price-product {
		color: white;
		text-align: left;
		padding: 0px 30px;
		display: flex;
		align-items: left;
		justify-content: center;
		flex-direction: column;
	}

	.price-product :nth-child(n) {
		margin: 4px 0;
	}

	.old-price {
		text-decoration: line-through;
		font-size: 0.9em;
		color: #c4c4c4;
	}

	.new-price {
		font-size: 1.3em;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: left;
		gap: 0.5rem;
	}

	.installments-product {
		font-size: 0.9em;
	}

	.promo-icon {
		color: #f0f0f0;
		font-size: 1.1em;
	}

	.sold-and_stock {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.8em;
		gap: 1rem;
		color: #c4c4c4;
		font-weight: 300;
	}
`;

export const Badge = styled.div`
	z-index: 15;
	position: absolute;
	top: -5%;
	left: -5%;
	background: #464d74;
	color: white;
	height: 120px;
	width: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	padding: 1rem;
	border-radius: 100%;
	font-size: 0.9em;
`;
