import { TEST_DAPP, TEST_DAPP_AGAIN } from "./types";

export function addMint_testDapp() {
	return function (dispatch: any) {
		return dispatch({
			type: TEST_DAPP,
			payload: "TEST_DAPP",
		});
	};
}

export function addMint_testDappAgain() {
	return function (dispatch: any) {
		return dispatch({
			type: TEST_DAPP_AGAIN,
			payload: "TEST_DAPP_AGAIN",
		});
	};
}
