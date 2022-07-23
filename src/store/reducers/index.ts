import { combineReducers } from "redux";
import dappReducer from "./dapp";

const reducer = combineReducers({
	dapp: dappReducer,
});

export default reducer;
