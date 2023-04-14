import React from "react";
import {
	Button,
	Card,
	Container,
	Section,
	Title,
} from "../Styles/Style";
import { useState } from "react";
import { useEffect } from "react";

export default function BuyPage() {
	const [counterPill, setCounterPill] = useState(1);

	const selectedProduct = JSON.parse(
		localStorage.getItem("selectedProduct")
	);

	const priceProduct =
		parseFloat(selectedProduct.price.toFixed(1)) * counterPill;

	const freightPrice = 21.43;

	const handleAddPill = () => {
		setCounterPill(counterPill + 1);
	};

	const handleSubPill = () => {
		setCounterPill(counterPill - 1);
		if (counterPill < 2) {
			setCounterPill(1);
		}
	};

	const totalPrice = priceProduct + freightPrice;

	return (
		<Section background="white">
			<Container padding="2rem" align="flex-start" gap="2rem">
				<div className="table-product">
					<table>
						<tr>
							<th className="table-product">Produto</th>
							<th className="table-quantity">Qtd</th>
							<th className="table-delivery">
								Entrega
							</th>
							<th className="table-price">Preço</th>
						</tr>
						<tbody>
							<tr>
								<td>
									<Container gap="1rem">
										<img
											src={
												selectedProduct.thumbnail
											}
											alt={selectedProduct.id}
										/>
										{selectedProduct.title
											.length > 70
											? `${selectedProduct.title.slice(
													0,
													70
											  )}...`
											: selectedProduct.title}
									</Container>
								</td>
								<td>
									<Container
										width="120px"
										gap="10px"
										justify="space-between"
										className="pill-quantity_container"
									>
										<div
											onClick={handleSubPill}
											className="pill-sub"
										>
											-
										</div>
										<div className="pill-quantity">
											{counterPill}
										</div>
										<div
											onClick={handleAddPill}
											className="pill-add"
										>
											+
										</div>
									</Container>
								</td>
								<td>Receba até dia 30 de abril</td>
								<td>R$ {priceProduct}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<Card
					shadow={false}
					background="#f8f8f8"
					width="40vw"
					padding="1rem"
					className="resume-order"
					justify="space-around"
				>
					<div className="resume-order_header">
						<Title fontSize="1.2em">
							Resumo do pedido
						</Title>
					</div>
					<div className="resume-order_infos">
						<Container>
							<div className="resume-order_quantity">
								{counterPill}x Produto
							</div>
							<div className="resume-order_price">
								R$ {priceProduct}
							</div>
						</Container>
						<Container>
							<div className="resume-order_freight">
								Frete
							</div>
							<div className="resume-order_freight_price">
								R$ {freightPrice}
							</div>
						</Container>
					</div>
					<div className="resume-order_total">
						<Container dir="column" justify="center">
							<div>
								Total
								<div className="total-price">
									R$ {totalPrice}
								</div>
							</div>
							<Button background="#3f3c3c">
								Comprar
							</Button>
						</Container>
					</div>
				</Card>
			</Container>
		</Section>
	);
}
