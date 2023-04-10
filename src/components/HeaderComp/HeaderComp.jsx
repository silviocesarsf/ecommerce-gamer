import React, { useContext } from "react";
import { Button, Header } from "../../Styles/Style";
import { ContextProvider } from "../../context/Context";
import {
	Link,
	NavLink,
	useLocation,
	useNavigate,
} from "react-router-dom";

export default function HeaderComp() {
	const { searchText, setSearchText, fetchData } =
		useContext(ContextProvider);

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

	const requestApi = () => {
		if (searchText) {
			navigate("/search");
		} else {
			return alert("Digite algo !");
		}
	};

	return (
		<Header style={changeStyle}>
			<Link to="/" className="logo-header">
				<h2>ByteLand</h2>
			</Link>
			<div className="links-header">
				<ul>
					<NavLink activeclassname to="/mouses">
						Mouses
					</NavLink>
					<NavLink activeclassname to="/headsets">
						Headsets
					</NavLink>
					<NavLink activeclassname to="/teclados">
						Teclados
					</NavLink>
					<NavLink activeclassname to="/monitores">
						Monitores
					</NavLink>
				</ul>
			</div>
			<div className="login-header">
				<NavLink to="/login">
					<Button className="login-btn">Login</Button>
				</NavLink>
				<NavLink to="/register">
					<Button border={false} className="register-btn">
						Cadastro
					</Button>
				</NavLink>
			</div>
		</Header>
	);
}
