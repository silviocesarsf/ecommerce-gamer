import React from "react";
import {
	Button,
	Card,
	Container,
	Input,
	Title,
} from "../Styles/Style";
import { NavLink } from "react-router-dom";

export default function Login() {
	return (
		<Container height="100%">
			<Card className="login-card" width="30vw">
				<Title>Login</Title>
				<form>
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
					<Container dir="column">
						<Button background="#5f779c">Logar</Button>
						<NavLink to="/register">
							<span>Registrar-se</span>
						</NavLink>
					</Container>
				</form>
			</Card>
		</Container>
	);
}
