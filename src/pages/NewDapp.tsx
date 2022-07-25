import React from "react";
import { init, useConnectWallet } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import { ethers } from "ethers";
import {
	NETWORK_ID,
	NETWORK_NAME,
	RPC_PROVIDER,
} from "dapp/constants/constants";
import Mint from "components/newDapp/Mint";
import { Button } from "@mui/material";

// Sign up to get your free API key at https://explorer.blocknative.com/?signup=true
const dappId = "1730eff0-9d50-4382-a3fe-89f0d34a2070";

const injected = injectedModule();

const infuraKey = "<INFURA_KEY>";
const rpcUrl = RPC_PROVIDER;

// initialize Onboard
init({
	wallets: [injected],
	chains: [
		{
			id: `0x${NETWORK_ID}`,
			token: "ETH",
			label: NETWORK_NAME,
			rpcUrl,
		},
	],
});

export default function App() {
	const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

	// create an ethers provider
	let ethersProvider;

	if (wallet) {
		ethersProvider = new ethers.providers.Web3Provider(wallet.provider, "any");
	}

	return (
		<div>
			<button
				disabled={connecting}
				onClick={() => (wallet ? disconnect(wallet) : connect())}
			>
				{connecting ? "connecting" : wallet ? "disconnect" : "connect"}
			</button>
			{wallet ? (
				<Mint />
			) : (
				<Button onClick={() => (wallet ? disconnect(wallet) : connect())}>
					Mint
				</Button>
			)}
		</div>
	);
}
