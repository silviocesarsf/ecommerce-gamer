import React, { useContext, useEffect, useState } from "react";
import { Button, Section, Wrapper } from "../Styles/Style";
import mouseHero from "../assets/mouse_g502.png";
import mouseGpro from "../assets/mouse_gpro.png";
import keyboardGpro from "../assets/teclado_gpro.png";
import { ContextProvider } from "../context/Context";

export default function Home() {
	const { setDataApi } = useContext(ContextProvider);

	useEffect(() => {
		setDataApi(null);
	}, []);

	return (
		<Wrapper>
			<Section background="#4a6396">
				<div className="content-home">
					<div className="text-home">
						<h1>
							DESENVOLVIDO COM PROFISSIONAIS, PROJETADO
							PARA VENCER
						</h1>
						<p>
							Nova linha Pro. <br /> Feita por gamers
							para gamers.
						</p>
						<Button>Conhecer</Button>
					</div>
					<div className="hero-home">
						<img
							className="keyboard-hero"
							src={keyboardGpro}
							alt=""
						/>
					</div>
				</div>
			</Section>
		</Wrapper>
	);
}
