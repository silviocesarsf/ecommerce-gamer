import React, { useContext, useEffect } from "react";
import { Button, Header } from "../../Styles/Style";
import { ContextProvider } from "../../context/Context";
import {
	Link,
	NavLink,
	useLocation,
	useNavigate,
} from "react-router-dom";
import LoaderInline from "../LoaderInline/LoaderInline";

export default function HeaderComp() {
	const {
		setSearchText,
		isLogged,
		setIsLogged,
		userObj,
		setIsLoading,
		isLoading,
	} = useContext(ContextProvider);

	const navigate = useNavigate();
	const location = useLocation();
	const currentPath = location.pathname;

	const changeStyle = {
		backgroundColor: currentPath != "/" && "#4a6396",
	};

	const handleSearchBox = () => {
		setSearchBox(!searchBox);
	};

	const handleSearchText = (e) => {
		setSearchText(e.target.value);
	};

	const exitSession = () => {
		setIsLogged(false);
	};

	return (
		<Header style={changeStyle}>
			<Link to="/" className="logo-header">
				<h2>ByteLand</h2>
			</Link>
			<div className="links-header">
				<ul>
					<NavLink activeclassname="true" to="/mouses">
						Mouses
					</NavLink>
					<NavLink activeclassname="true" to="/headsets">
						Headsets
					</NavLink>
					<NavLink activeclassname="true" to="/teclados">
						Teclados
					</NavLink>
					<NavLink activeclassname="true" to="/monitores">
						Monitores
					</NavLink>
				</ul>
			</div>
			{isLogged ? (
				<>
					<span>{userObj.nameUser}</span>
					<Button onClick={exitSession}>Sair</Button>
				</>
			) : (
				<div className="login-header">
					<NavLink to="/login">
						<Button className="login-btn">Logar</Button>
					</NavLink>
					<NavLink to="/register">
						<Button
							border={false}
							className="register-btn"
						>
							Cadastro
						</Button>
					</NavLink>
				</div>
			)}
		</Header>
	);
}
