import {  useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import SearchServise from "../service/search";
import {
	searchCardFailore,
	searchCardStart,
	searchCardSuccess,
} from "../slice/cards";

const Search = () => {
	const [value, setValue] = useState("");
	const dispatch = useDispatch();

	const searchData = async (e) => {
		e.preventDefault();

		dispatch(searchCardStart());

		try {
			const responce = await SearchServise.searchcards(value);

			dispatch(searchCardSuccess(responce.products)); 
		} catch (error) {
			dispatch(searchCardFailore("error at searchcard"));
		}
	};

	useEffect(() => {
		value !== "" && searchData();
	}, [value]);

	return (
		<form onSubmit={searchData}>
			<div className="search">
				<i
					style={{
						position: "absolute",
						top: "12px",
						left: "15px",
						fontSize: "20px",
						zIndex: "1000",
					}}
					className="fas fa-search "></i>

				<input
					value={value}
					type="search"
					placeholder="Search..."
					className="searchInput"
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
		</form>
	);
};

export default Search;
