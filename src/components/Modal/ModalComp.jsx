import React, { useContext, useEffect, useState } from "react";
import { Modal, Section } from "../../Styles/Style";
import { ContextProvider } from "../../context/Context";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function ModalComp() {
	const { isModal, setIsModal } = useContext(ContextProvider);

	return (
		<Modal>
			<div className="header-modal">
				<button onClick={() => setIsModal(false)}>
					Fechar
				</button>
			</div>
			<div className="methods-payment_modal">
				<ul>
					<li>Cartão de Crédito</li>
					<li>Cartão de Débito</li>
					<li>Boleto</li>
					<li>Pix</li>
				</ul>
			</div>
		</Modal>
	);
}
