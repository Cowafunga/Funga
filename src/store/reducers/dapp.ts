import { TEST_DAPP, TEST_DAPP_AGAIN } from "../actions/types";

interface IAction {
	type: string;
	payload: any;
}

const initialState = {
	mints: [] as string[],
	name: "State Obj",
};

export default function dapp(state = initialState, action: IAction) {
	switch (action.type) {
		case TEST_DAPP:
			return { ...state, mints: [...state.mints, action.payload] };
		case TEST_DAPP_AGAIN:
			return { ...state, mints: [...state.mints, action.payload] };
		default:
			return state;
	}
}
