import React, { useContext, useEffect } from "react";
import {
	Button,
	Card,
	Container,
	Input,
	Title,
} from "../Styles/Style";
import { NavLink, useNavigate } from "react-router-dom";
import { ContextProvider } from "../context/Context";
import LoaderInline from "../components/LoaderInline/LoaderInline";

export default function Login() {
	const {
		emailLogin,
		setEmailLogin,
		passwordLogin,
		setPasswordLogin,
		isLogged,
		setIsLogged,
		userObj,
		isLoading,
		setIsLoading,
	} = useContext(ContextProvider);

	const navigate = useNavigate();

	const handleEmailLogin = (e) => {
		setEmailLogin(e.target.value);
	};

	const handlePasswordLogin = (e) => {
		setPasswordLogin(e.target.value);
	};

	const authLogin = () => {
		if (
			emailLogin === userObj.emailUser &&
			passwordLogin === userObj.passwordUser
		) {
			alert("Logado com sucesso");
			setIsLoading(true);
			setTimeout(() => {
				setIsLogged(true);
				navigate("/buypage");
				setIsLoading(false);
			}, [1000]);
		} else {
			alert("Verifique as informações e tente novamente.");
		}
	};

	return (
		<Container height="100%">
			<Card className="login-card" width="30vw">
				<Title>Login</Title>
				<Input
					type="email"
					placeholder="Digite seu Email"
					autoFocus
					onChange={handleEmailLogin}
				/>
				<Input
					type="password"
					placeholder="Digite sua Senha"
					autoFocus
					onChange={handlePasswordLogin}
				/>
				<Container dir="column">
					<Button onClick={authLogin} background="#5f779c">
						Logar
					</Button>
					{isLoading && <LoaderInline />}
					<NavLink to="/register">
						<span>Registrar-se</span>
					</NavLink>
				</Container>
			</Card>
		</Container>
	);
}
