import axios from "./api-products";

const SearchServise = {
	async searchcards(value) {
		const responce = await axios.get(`/products/search?q=${value}`);

		return responce.data;
	},
};

export default SearchServise;
