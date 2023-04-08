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

export default function ProductsList({ product }) {
	const { dataApi, setDataApi, fetchData, isLoading } =
		useContext(ContextProvider);

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
								<Badge>Ultimos Disponíveis !</Badge>
							)}
							<img src={product.thumbnail} alt="" />
						</div>
						<div className="info-product">
							<div className="name-product">
								{product.title.length > 50
									? `${product.title.slice(
											0,
											50
									  )}...`
									: product.title}
							</div>
							<div className="price-product">
								<div className="old-price">
									{product.original_price
										? `De: ${product.original_price} R$`
										: null}
								</div>
								<div className="new-price">
									{product.original_price
										? `Por: ${product.price} R$`
										: `${product.price} R$`}
									{product.original_price && (
										<AiFillFire className="promo-icon" />
									)}
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
								<Button>Ver</Button>
							</div>
						</div>
					</CardProducts>
				))}
			{isLoading && (
				<MutatingDots
					height="100"
					width="100"
					color="#5b6eee"
					secondaryColor="#5b6eee"
					radius="12.5"
					ariaLabel="mutating-dots-loading"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
				/>
			)}
		</GridProducts>
	);
}
