import React from "react";
import {
	Button,
	Card,
	Container,
	Input,
	Title,
} from "../Styles/Style";
import { NavLink } from "react-router-dom";

export default function Register() {
	return (
		<Container height="100%">
			<Card className="login-card" height="90vh" width="30vw">
				<Title>Registro</Title>
				<form>
					<Input
						type="text"
						placeholder="Digite seu nome"
						autoFocus
					/>
					<Input
						type="email"
						placeholder="Digite seu Email"
						autoFocus
					/>
					<Input
						type="password"
						placeholder="Digite sua Senha"
						autoFocus
					/>
					<Input
						type="password"
						placeholder="Confirme sua Senha"
						autoFocus
					/>
					<Container dir="column">
						<Button background="#5f779c">
							Registrar-se
						</Button>
						<NavLink to="/login">
							<span>Logar</span>
						</NavLink>
					</Container>
				</form>
			</Card>
		</Container>
	);
}
