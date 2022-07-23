import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const initalState = {};

const store = configureStore({
	// middleware: applyMiddleware(),
	reducer: () => ({}),
	middleware: [thunk],
	preloadedState: initalState,
});

export default store;
