import React, { useContext, useEffect } from "react";
import { ContextProvider } from "../context/Context";
import {
	Button,
	ButtonBuy,
	Input,
	Section,
	Wrapper,
} from "../Styles/Style";
import userPlaceholderImage from "../assets/placeholder-user.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ModalComp from "../components/Modal/ModalComp";
import { useNavigate } from "react-router-dom";

export default function BuyPage() {
	const { isModal, setIsModal, isLogged, setIsLogged } =
		useContext(ContextProvider);

	const navigate = useNavigate();

	const selectedProduct = JSON.parse(
		localStorage.getItem("selectedProduct")
	);

	const handleIsModalOpen = () => {
		setIsModal(!isModal);
	};

	const handleBuy = () => {
		if (isLogged) {
			navigate("/");
		} else {
			alert("Você precisa logar!");
			setTimeout(() => {
				navigate("");
			}, [2000]);
		}
	};

	return (
		<Wrapper>
			{isModal && <ModalComp />}
			<Section className="buy-page">
				<div className="left-buy_page">
					<div className="info-product_selected">
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
							<div className="description-buy_page">
								<p>
									aqui é a descricao disgraça Lorem
									ipsum dolor sit amet consectetur
									adipisicing elit. Eius sint
									consectetur, quasi quae beatae
									nesciunt, culpa deserunt voluptas
									mollitia odit magni voluptates
									aspernatur laudantium earum
									voluptatum est pariatur eligendi.
									Eum.
								</p>
								<p>
									Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Illo
									quis exercitationem laudantium,
									numquam accusamus vitae velit
									laborum maiores a corporis,
									molestiae ea distinctio maxime sit
									ullam nostrum officia, mollitia
									amet?
								</p>
							</div>
						</div>
					</div>
					<div className="seller-infos">
						<div className="photo-seller">
							<img src={userPlaceholderImage} alt="" />
						</div>
						<div className="name-seller">
							{selectedProduct.seller.nickname}
						</div>
					</div>
				</div>
				<div className="right-buy_page">
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
							Em até{" "}
							{selectedProduct.installments.quantity}x
							de R${selectedProduct.installments.amount}
						</div>
						<div className="methods-payments">
							<span onClick={handleIsModalOpen}>
								Ver mais formas de pagamentos
							</span>
						</div>
					</div>
					<div className="freight-buy_page">
						<label>Digite seu CEP</label>
						<Input type="number" />
					</div>
					<div className="btn-buy_container">
						<ButtonBuy onClick={handleBuy}>
							Comprar
						</ButtonBuy>
						<AiOutlineShoppingCart className="btn-add_to_cart" />
					</div>
				</div>
			</Section>
		</Wrapper>
	);
}
