import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../../context/Context";
import {
	Badge,
	Button,
	CardProducts,
	GridProducts,
} from "../../Styles/Style";
import { MutatingDots } from "react-loader-spinner";
import { AiFillFire } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function ProductsList({ product }) {
	const { dataApi, setDataApi, fetchData, isLoading } =
		useContext(ContextProvider);

	const navigate = useNavigate();

	const [selectedProduct, setSelectedProduct] = useState(null);

	const handleProductSelect = (product) => {
		setSelectedProduct(product);
		localStorage.setItem(
			"selectedProduct",
			JSON.stringify(product)
		);
		navigate("/buypage");
	};

	useEffect(() => {
		setDataApi(null);
		fetchData(product);
	}, [product]);

	return (
		<GridProducts>
			{dataApi &&
				dataApi.map((product) => (
					<CardProducts key={product.id}>
						<div className="photo-product">
							{product.available_quantity < 10 && (
								<Badge>Ultimos Disponíveis</Badge>
							)}
							<img
								src={product.thumbnail}
								alt={product.id}
							/>
						</div>
						<div className="info-product">
							<div className="name-product">
								{product.title.length > 30
									? `${product.title.slice(
											0,
											30
									  )}...`
									: product.title}
							</div>
							<div className="price-product">
								<div className="old-price">
									{product.original_price
										? `De: R$ ${product.original_price}`
										: null}
								</div>
								<div className="new-price">
									{product.original_price
										? `Por: R$ ${product.price}`
										: `R$ ${product.price}`}
									{product.original_price && (
										<AiFillFire className="promo-icon" />
									)}
								</div>
								<div className="installments-product">
									{product.price > 40 &&
										`${product.installments.quantity}x de R$ ${product.installments.amount} sem juros`}
								</div>
							</div>
							<div className="sold-and_stock">
								<div className="solded">
									{`Vendidos: ${product.sold_quantity}`}
								</div>
								<div className="stock">
									{`Em estoque: ${product.available_quantity}`}
								</div>
							</div>
							<div className="button-buy_product">
								<Button
									onClick={() =>
										handleProductSelect(product)
									}
								>
									Ver
								</Button>
							</div>
						</div>
					</CardProducts>
				))}
			{isLoading && (
				<MutatingDots
					height="100"
					width="100"
					color="#f8f8f8"
					secondaryColor="#dddddd"
					radius="12.5"
					ariaLabel="mutating-dots-loading"
					wrapperStyle={{}}
					wrapperClass="loader"
					visible={true}
				/>
			)}
		</GridProducts>
	);
}
