import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isloading: false,
	cards: [],
	singleCard: null,
	searchCard: null,
	error: null,
};

export const cardSlice = createSlice({
	name: "card",
	initialState,
	reducers: {
		getCardsStart: (state) => {
			state.isloading = true;
		},

		getCardsSuccess: (state, action) => {
			state.isloading = false;
			state.cards = action.payload;
		},

		getCardsFailore: (state, action) => {
			state.isloading = false;
			state.error = action.payload;
		},

		getSingleCardStart: (state) => {
			state.isloading = true;
		},

		getSingleCardSuccess: (state, action) => {
			state.isloading = false;
			state.singleCard = action.payload;
		},

		getSingleCardFailore: (state) => {
			state.isloading = false;
		},

		searchCardStart: (state) => {
			state.isloading = true;
		},

		searchCardSuccess: (state, action) => {
			state.isloading = false;
			state.searchCard = action.payload;
		},

		searchCardFailore: (state, action) => {
			state.isloading = false;
			state.error = action.payload;
		},
	},
});

export const {
	getCardsStart,
	getCardsSuccess,
	getCardsFailore,
	getSingleCardStart,
	getSingleCardFailore,
	getSingleCardSuccess,
	searchCardStart,
	searchCardSuccess,
	searchCardFailore,
} = cardSlice.actions;

export default cardSlice.reducer;
