import React, { useContext, useEffect } from "react";
import { ContextProvider } from "../context/Context";
import { Section, Wrapper } from "../Styles/Style";

export default function BuyPage() {
	const selectedProduct = JSON.parse(
		localStorage.getItem("selectedProduct")
	);

	return (
		<Wrapper>
			<Section className="buy-page">
				<div className="left-buy_page">
					<div className="photo-buy_page">
						<img src={selectedProduct.thumbnail} alt="" />
					</div>
					<div className="info-buy_page">
						<div className="title-buy_page">
							{selectedProduct.title.length > 50 &&
								`${selectedProduct.title.slice(
									0,
									50
								)}...`}
						</div>
						<div className="description-buy_page">
							aqui é a descricao disgraça Lorem ipsum
							dolor sit amet consectetur adipisicing
							elit. Eius sint consectetur, quasi quae
							beatae nesciunt, culpa deserunt voluptas
							mollitia odit magni voluptates aspernatur
							laudantium earum voluptatum est pariatur
							eligendi. Eum.
						</div>
					</div>
				</div>
				<div className="right-buy_page">
					<div className="price-buy_page">
						<div className="old-price">
							De: R${selectedProduct.original_price}
						</div>
						<div className="new-price">
							Por :R$ {selectedProduct.price}
						</div>
						<div className="installments">
							Em até{" "}
							{selectedProduct.installments.quantity}x
							de R${selectedProduct.installments.amount}
						</div>
					</div>
					<div className="freight-buy_page"></div>
					<button>comprar</button>
				</div>
			</Section>
		</Wrapper>
	);
}
