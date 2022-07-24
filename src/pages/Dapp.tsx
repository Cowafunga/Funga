import React from "react";
import { Box } from "@mui/material";
import ConnectWallet from "components/dapp/ConnectWallet";
import Mint from "components/dapp/Mint";

export default function Dapp() {
	return (
		<Box
			sx={{
				py: 10,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				gap: 10,
				"&>*": {
					minWwidth: 200,
				},
			}}
		>
			<ConnectWallet />
			<Mint />
		</Box>
	);
}
