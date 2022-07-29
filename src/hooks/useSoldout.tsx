import { useMint } from "contexts/MintContext";
import { useEffect, useState } from "react";

export default function useSoldout() {
	const [state] = useMint();
	const [soldout, setState] = useState(
		Boolean(state.totalMinted && state.totalMinted >= state.maxSupply)
	);
	useEffect(() => {
		setState(
			Boolean(state.totalMinted && state.totalMinted >= state.maxSupply)
		);
	}, [state.maxSupply, state.totalMinted]);

	return soldout;
}
