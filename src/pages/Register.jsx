import React, { useContext } from "react";
import {
	Button,
	Card,
	Container,
	Input,
	Title,
} from "../Styles/Style";
import { NavLink, useNavigate } from "react-router-dom";
import { ContextProvider } from "../context/Context";

export default function Register() {
	const navigate = useNavigate();

	const {
		emailRegister,
		setEmailRegister,
		passwordRegister,
		setPasswordRegister,
		nameRegister,
		setNameRegister,
		passwordConfirm,
		setPasswordConfirm,
	} = useContext(ContextProvider);

	const handleEmailRegister = (e) => {
		setEmailRegister(e.target.value);
	};

	const handlePasswordRegister = (e) => {
		setPasswordRegister(e.target.value);
	};

	const handleNameRegister = (e) => {
		setNameRegister(e.target.value);
	};

	const handleConfirmPassword = (e) => {
		setPasswordConfirm(e.target.value);
	};

	const authUser = () => {
		if (
			emailRegister === "" ||
			passwordRegister === "" ||
			nameRegister === "" ||
			passwordRegister.length < 5 ||
			emailRegister.length < 5 ||
			nameRegister.length < 5 ||
			passwordConfirm !== passwordRegister
		) {
			return alert("Verifique as informações");
		} else {
			alert("Tudo ok");
			localStorage.setItem("email_user", emailRegister);
			localStorage.setItem("name_user", nameRegister);
			localStorage.setItem("password_user", passwordRegister);
			setTimeout(() => {
				navigate("/login");
			}, [1000]);
		}
	};

	return (
		<Container height="100%">
			<Card className="login-card" height="90vh" width="30vw">
				<Title>Registro</Title>

				<Input
					type="text"
					placeholder="Digite seu nome"
					autoFocus
					onChange={handleNameRegister}
				/>
				<Input
					type="email"
					placeholder="Digite seu Email"
					autoFocus
					onChange={handleEmailRegister}
					required
				/>
				<Input
					type="password"
					placeholder="Digite sua Senha"
					autoFocus
					onChange={handlePasswordRegister}
				/>
				<Input
					type="password"
					placeholder="Confirme sua Senha"
					autoFocus
					onChange={handleConfirmPassword}
				/>
				<Container dir="column">
					<Button onClick={authUser} background="#5f779c">
						Registrar-se
					</Button>
					<NavLink to="/login">
						<span>Logar</span>
					</NavLink>
				</Container>
			</Card>
		</Container>
	);
}
