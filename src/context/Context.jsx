import { createContext, useState } from "react";

export const ContextProvider = createContext();

export const Context = ({ children }) => {
	const [searchText, setSearchText] = useState("");
	const [dataApi, setDataApi] = useState([]);
	const [isHome, setIsHome] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isModal, setIsModal] = useState(false);
	const [isLogged, setIsLogged] = useState(false);

	const fetchData = (searchTerm) => {
		fetch(
			`https://api.mercadolibre.com/sites/MLB/search?q=${searchTerm}`
		)
			.then((r) => r.json())
			.then((response) => {
				console.log(response);
				setDataApi(response.results);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(setIsLoading(true));
	};

	return (
		<ContextProvider.Provider
			value={{
				searchText,
				setSearchText,
				dataApi,
				setDataApi,
				fetchData,
				isHome,
				setIsHome,
				isLoading,
				setIsLoading,
				setIsModal,
				isModal,
				setIsLogged,
				isLogged,
			}}
		>
			{children}
		</ContextProvider.Provider>
	);
};
