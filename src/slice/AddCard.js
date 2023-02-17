import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	counter: 0,
	addedCards: [],
};

export const AddCardSlice = createSlice({
	name: "addCardSlice",
	initialState,
	reducers: {
		addCards: (state, action) => {
			state.counter = (prev) => prev + 1;
			state.addedCards = action.payload;
		},
	},
});

export const { addCards } = AddCardSlice.actions;
export default AddCardSlice.reducer;
