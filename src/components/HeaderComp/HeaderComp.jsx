import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Header } from "../../Styles/Style";
import { ContextProvider } from "../../context/Context";
import {
	Link,
	NavLink,
	useLocation,
	useNavigate,
} from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { AiOutlineClose } from "react-icons/ai";

export default function HeaderComp() {
	const {
		setSearchText,
		isLogged,
		setIsLogged,
		userObj,
		setIsLoading,
		isLoading,
		isMobile,
	} = useContext(ContextProvider);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [animationMenu, setAnimationMenu] = useState({});

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

	const animationMenuMobile = {
		right: "0%",
	};

	const handleMenuMobile = () => {
		setAnimationMenu(animationMenuMobile);
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<Header style={changeStyle}>
			<Link to="/" className="logo-header">
				<h2>ByteLand</h2>
			</Link>
			{isMobile && (
				<>
					<div
						onClick={handleMenuMobile}
						className="menu-mobile"
					>
						<div className="menu-mobile_line"></div>
						<div className="menu-mobile_line"></div>
						<div className="menu-mobile_line"></div>
					</div>
					{isMenuOpen && (
						<Container
							height="100vh"
							width="80%"
							dir="column"
							justify="space-around"
							className="links-header_mobile"
							style={animationMenu}
						>
							<AiOutlineClose
								onClick={handleMenuMobile}
								className="close-btn"
							/>
							<NavLink
								activeclassname="true"
								to="/mouses"
							>
								Mouses
							</NavLink>
							<NavLink
								activeclassname="true"
								to="/headsets"
							>
								Headsets
							</NavLink>
							<NavLink
								activeclassname="true"
								to="/teclados"
							>
								Teclados
							</NavLink>
							<NavLink
								activeclassname="true"
								to="/monitores"
							>
								Monitores
							</NavLink>
							<NavLink to="/login">
								<Button
									height="70px"
									background="#31345e"
									className="login-btn"
								>
									Logar
								</Button>
							</NavLink>
							<NavLink to="/register">
								<Button
									fontSize=".8em"
									height="70px"
									background="#464646"
									className="login-btn"
									border={false}
								>
									Registrar
								</Button>
							</NavLink>
						</Container>
					)}
				</>
			)}
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
