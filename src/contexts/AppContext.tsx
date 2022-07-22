import React, { useContext, useEffect } from "react";
import { useState } from "react";

const initialState = {
	mintBtnPressed: false,
	connectWalletPressed: false,
	isLoading: true,
};

const AppContext = React.createContext(initialState);

let setAppData: React.Dispatch<React.SetStateAction<typeof initialState>>;
export function useAppData(): [typeof initialState, typeof setAppData] {
	return [useContext(AppContext), setAppData];
}

export default function AppProvider({ children }: { children: any }) {
	let appData;
	[appData, setAppData] = useState(initialState);

	return <AppContext.Provider value={appData}>{children}</AppContext.Provider>;
}
