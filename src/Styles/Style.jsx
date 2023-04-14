import styled from "styled-components";

export const Header = styled.header`
	background: #4a6396;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80px;
	width: 100%;
	padding: 0.6rem 3rem;
	gap: 1rem;
	transition: 0.5s;

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

	.menu-mobile {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		cursor: pointer;
	}

	.menu-mobile_line {
		background: white;
		width: 40px;
		height: 2px;
		border-radius: 10px;
	}

	@media (max-width: 985px) {
		& {
			padding: 10px;
		}

		.links-header,
		.login-header {
			display: none;
		}
		.links-header_mobile {
			background: white;
			z-index: 15;
			position: fixed;
			right: -100%;
			top: 0%;
		}

		.links-header_mobile a {
			color: black;
			font-size: 2em;
		}

		.close-btn {
			position: absolute;
			top: 5%;
			left: 5%;
			color: black;
			font-size: 2em;
			cursor: pointer;
		}
	}
`;

export const Wrapper = styled.main`
	.buy-page {
		color: black;
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 1rem;
	}
`;

export const Container = styled.div`
	display: flex;
	padding-top: ${(props) => (props.padding ? props.padding : "")};
	min-height: ${(props) => props.height};
	width: ${(props) => props.width};
	align-items: ${(props) => (props.align ? props.align : "center")};
	justify-content: ${(props) =>
		props.justify ? props.justify : "center"};
	flex-direction: ${(props) => (props.dir ? props.dir : "")};
	gap: ${(props) => props.gap};
	background: ${(props) => props.background};

	.login-card :nth-child(n) {
		margin-bottom: 1rem;
	}

	.table-product table tbody .pill-quantity_container {
		border: 1px solid #c1c1c1;
		padding: 10px 30px;
		border-radius: 5px;
	}

	.table-product table tbody .pill-add,
	.pill-sub {
		cursor: pointer;
	}

	.card-info_products,
	.card-buy {
		background: white;
		height: 75vh;
		padding: 2rem;
		box-shadow: 1px 2px 3px #72727275;
		border-radius: 5px;
		color: black;
	}

	.card-info_products .photo-buy_page img {
		min-height: 250px;
		margin: 0 1rem;
	}

	.card-info_products .title-buy_page {
		font-size: 1.5em;
		font-weight: bold;
	}

	.card-info_products .description-buy_page {
		font-weight: 300;
	}

	.card-info_products {
		flex-direction: column;
		justify-content: space-between;
	}

	.card-info_products :nth-child(n) {
		margin: 1rem 0;
	}

	.price-buy_page .old-price {
		font-size: 1.5em;
		text-decoration: line-through;
	}

	.price-buy_page .new-price {
		font-size: 2em;
		font-weight: bold;
	}

	.price-buy_page .methods-payments span {
		font-size: 1em;
		font-weight: 300;
	}

	.price-buy_page .installments {
		font-size: 0.9em;
	}

	@media (max-width: 980px) {
		.left-buy_page {
			justify-content: center;
		}

		.photo-buy_page {
			width: 100%;
		}

		.photo-buy_page img {
			text-align: center;
		}

		.seller-infos {
			display: none;
		}

		.left-buy_page .description-buy_page {
			font-size: 0.8em;
		}
	}

	@media (max-width: 768px) {
		.card-info_products,
		.card-buy {
			overflow-y: auto;
			width: 100%;
		}

		.card-info_products .photo-buy_page img {
			min-height: 100px;
		}

		&.container-buy_page {
			flex-direction: column;
		}
	}
`;

export const Section = styled.section`
	min-height: 100vh;
	width: 100%;
	padding: 1rem 3rem;
	color: black;
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
		color: ${(props) => props.theme.colors.text};
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

	.keyboard-hero {
		max-height: 400px;
		transform: rotate(10deg);
	}

	.btn-add_to_cart {
		cursor: pointer;
		font-size: 1.2em;
	}

	.table-product table tbody td {
		padding: 1rem 2rem;
	}

	.table-product th {
		padding-bottom: 1rem;
		border-bottom: 1px solid #c1c1c1;
	}

	@media (max-width: 890px) {
		.content-home {
			flex-direction: column;
			gap: 2rem;
		}

		.text-home h1 {
			max-width: 100%;
			font-size: 1.7em;
		}

		.hero-home img {
			max-width: 300px;
		}
	}
	@media (max-width: 338px) {
		.hero-home img {
			max-width: 260px;
		}
	}

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;

export const Input = styled.input`
	height: ${(props) => (props.height ? props.height : "50px")};
	width: 100%;
	padding: 0 1rem;
	border: 1px solid #c1c1c1;
	border-radius: ${(props) =>
		props.borderRadius === false ? "" : "3px"};
	background: #f0f0f0;
	font-size: 1em;
`;

export const Button = styled.button`
	height: ${(props) => (props.height ? props.height : "40px")};
	width: 120px;
	padding: 10px;
	background: ${(props) =>
		props.background ? props.background : "transparent"};
	border-radius: 2px;
	font-size: ${(props) =>
		props.fontSize ? props.fontSize : "1em"};
	border: ${(props) =>
		props.border === false ? "" : "1px solid white"};
	color: ${(props) => (props.colorBtn ? props.colorBtn : "white")};
	transition: 0.5s;
	position: relative;

	&:hover {
		background-color: #0000006c;
	}
`;

export const ButtonBuy = styled(Button)`
	background: ${(props) => props.theme.colors.secundary};
`;

export const GridProducts = styled.div`
	padding-top: 2rem;
	min-height: 80vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	place-items: center;
	gap: 1rem;

	@media (max-width: 1040px) {
		& {
			display: flex;
			flex-direction: column;
		}
	}
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

	@media (max-width: 927px) {
		& {
			width: 90vw;
		}
	}

	@media (max-width: 516px) {
		& {
			width: 90vw;
			height: 400px;
		}
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

	@media (max-width: 516px) {
		& {
			width: 90px;
			height: 90px;
		}
	}
`;

export const Modal = styled.div`
	position: fixed;
	z-index: 15;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #f7f7f7;
	height: 80vh;
	min-width: 20vw;
	border-radius: 10px;
	box-shadow: 1px 2px 4px #c1c1c1;
	padding: 2rem;
	color: black;
	display: flex;
	align-items: left;
	justify-content: center;
	flex-direction: column;

	.header-modal {
		position: absolute;
		top: 5%;
	}

	.methods-payment_modal li {
		margin: 2rem 0;
		font-size: 1.4em;
	}
`;

export const Card = styled.div`
	background: ${(props) =>
		props.background ? props.background : "white"};
	width: ${(props) => props.width};
	height: ${(props) => (props.height ? props.height : "80vh")};
	border-radius: 5px;
	color: black;
	box-shadow: ${(props) =>
		props.shadow === false ? "" : "1px 2px 3px #474747"};
	padding: ${(props) =>
		props.padding ? props.padding : "1rem 2rem"};
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	position: relative;
	gap: 2rem;

	&.login-card {
	}

	.resume-order_infos > div {
		margin: 1rem 0;
		justify-content: space-between;
		gap: 8rem;
		color: #3f3f3f;
	}

	.resume-order_total > div {
		margin: 1rem 0;
		gap: 1rem;
	}

	.resume-order_infos {
		border-bottom: 1px solid #c1c1c1;
	}

	@media (max-width: 768px) {
		width: 90vw;
	}
`;

export const Title = styled.h1`
	font-size: ${(props) =>
		props.fontSize ? props.fontSize : "2.5em"};
	text-align: center;
	color: black;
`;
