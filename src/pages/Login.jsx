import React from "react";
import {
	Button,
	Card,
	Container,
	Input,
	Title,
} from "../Styles/Style";

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
						<span>Registrar-se</span>
					</Container>
				</form>
			</Card>
		</Container>
	);
}
