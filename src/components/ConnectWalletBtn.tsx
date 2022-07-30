import { Button, SxProps } from "@mui/material";
import { useConnectWallet } from "@web3-onboard/react";
import { OPENSEA_LINK } from "data/constants";
import useSoldout from "hooks/useSoldout";
import React from "react";

interface ButtonProps {
	sx?: SxProps;
	className?: string;
}

export default function ConnectWalletBtn({
	sx = {},
	className = "",
}: ButtonProps) {
	const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
	const soldout = useSoldout();
	return (
		<Button
			className={className}
			variant="contained"
			startIcon={<img alt="" src="/images/wallet.svg" />}
			onClick={() => {
				if (soldout && !wallet) {
					window.open(OPENSEA_LINK);
				} else {
					wallet ? disconnect(wallet) : connect();
				}
			}}
			sx={{ ...sx }}
		>
			{connecting ? "connecting" : wallet ? "disconnect" : "Connect Wallet"}{" "}
		</Button>
	);
}
