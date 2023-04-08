import React, { useContext, useEffect, useState } from "react";
import {
	Button,
	Container,
	Header,
	SearchBoxInput,
} from "../../Styles/Style";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { m, motion } from "framer-motion";
import { ContextProvider } from "../../context/Context";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function HeaderComp() {
	const { searchText, setSearchText, fetchData } =
		useContext(ContextProvider);
	const [searchBox, setSearchBox] = useState(false);
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
		fetchData(searchText);
	};

	return (
		<Header
			style={changeStyle}
			gap={searchBox}
			search={searchBox}
		>
			<div onClick={handleSearchBox} className="search-icon">
				{searchBox ? (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, rotate: 360 }}
						transition={{
							duration: 0.8,
							type: "ease-in-out",
							delay: 0.1,
						}}
					>
						<IoMdClose />
					</motion.div>
				) : (
					<BiSearchAlt2 />
				)}
			</div>
			{searchBox ? (
				<motion.div
					initial={{ opacity: 0, scaleX: 0, originX: 0 }}
					animate={{ opacity: 1, scaleX: 1, originX: 0 }}
					exit={{ scaleX: 0, originX: 0 }}
					transition={{
						duration: 0.1,
						type: "ease-in-out",
						delay: 0.1,
						stiffness: 560,
						damping: 20,
					}}
				>
					<SearchBoxInput
						type="search"
						placeholder="Pesquise algum produto !"
						onChange={handleSearchText}
					/>
					<button onClick={requestApi}>Search</button>
				</motion.div>
			) : (
				<>
					<Link to="/" className="logo-header">
						<h2>Katchau</h2>
					</Link>
					<div className="links-header">
						<ul>
							<NavLink
								activeclassname="active"
								to="/mouses"
							>
								Mouses
							</NavLink>
							<NavLink
								activeclassname="active"
								to="/headsets"
							>
								Headsets
							</NavLink>
							<NavLink
								activeclassname="active"
								to="/teclados"
							>
								Teclados
							</NavLink>
							<NavLink
								activeclassname="active"
								to="/monitores"
							>
								Monitores
							</NavLink>
						</ul>
					</div>
					<div className="login-header">
						<Button className="login-btn">Login</Button>
						<Button
							border={false}
							className="register-btn"
						>
							Cadastro
						</Button>
					</div>
				</>
			)}
		</Header>
	);
}
