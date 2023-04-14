import React, { useContext } from "react";
import { ContextProvider } from "../context/Context";
import {
	Button,
	ButtonBuy,
	Container,
	Input,
	Section,
	Wrapper,
} from "../Styles/Style";
import userPlaceholderImage from "../assets/placeholder-user.jpg";
import ModalComp from "../components/Modal/ModalComp";
import { useNavigate } from "react-router-dom";
import LoaderInline from "../components/LoaderInline/LoaderInline";

export default function DetailsProduct() {
	const {
		isLogged,
		cepNumber,
		setCepNumber,
		fetchCep,
		cepData,
		isLoading,
		cepError,
		setCepError,
		isMobile,
		StyleColumn,
	} = useContext(ContextProvider);

	const navigate = useNavigate();

	const selectedProduct = JSON.parse(
		localStorage.getItem("selectedProduct")
	);

	const handleCepNumber = (e) => {
		setCepNumber(e.target.value);
	};

	const handleBuy = () => {
		if (isLogged) {
			navigate("/buypage");
		} else {
			alert("Você precisa logar!");
			setTimeout(() => {
				navigate("/login");
			}, [1000]);
		}
	};

	return (
		<Section>
			<Container className="container-buy_page" gap="1rem">
				<Container
					align="flex-start"
					className="card-info_products"
				>
					<div className="photo-buy_page">
						<img
							src={selectedProduct.thumbnail}
							alt={selectedProduct.id}
						/>
					</div>
					<div className="info-buy_page">
						<div className="title-buy_page">
							{selectedProduct.title.length > 50
								? `${selectedProduct.title.slice(
										0,
										50
								  )}...`
								: selectedProduct.title}
						</div>
					</div>
					<div className="description-buy_page">
						<p>
							Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Quos, recusandae tempore
							velit minima eos veritatis ullam
							perspiciatis ratione. Voluptatem, quo
							inventore eos ex qui dolore modi amet
							earum cupiditate cumque.
						</p>
					</div>
				</Container>
				<Container
					dir="column"
					justify="space-around"
					className="card-buy"
				>
					<div className="price-buy_page">
						<div className="old-price">
							{selectedProduct.original_price
								? `De: R$ ${selectedProduct.original_price}`
								: null}
						</div>
						<div className="new-price">
							{selectedProduct.original_price
								? `Por: R$ ${selectedProduct.price}`
								: `R$ ${selectedProduct.price}`}
						</div>
						<div className="installments">
							{`Em até ${selectedProduct.installments.quantity}x `}
							{`de R$ ${selectedProduct.installments.amount}`}
						</div>
						<div className="methods-payments">
							<span>Ver mais formas de pagamentos</span>
						</div>
					</div>
					<label>Digite seu CEP</label>
					<Container
						height="60px"
						className="freight-buy_page"
					>
						<Input
							onChange={handleCepNumber}
							type="number"
							borderRadius={false}
							height="100%"
						/>
						<Button
							onClick={() => fetchCep()}
							background="#344661"
							height="100%"
						>
							Ok
						</Button>
					</Container>
					{cepData && (
						<>
							<span>{cepData.logradouro}</span>
							<span>{cepData.localidade}</span>
						</>
					)}
					{isLoading && <LoaderInline />}
					{cepData.erro === true ||
						(cepError === true && (
							<span>Nenhum CEP encontrado</span>
						))}
					<div className="btn-buy_container">
						<ButtonBuy onClick={handleBuy}>
							Comprar
						</ButtonBuy>
					</div>
				</Container>
			</Container>
		</Section>
	);
}
