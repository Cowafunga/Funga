import React, { useContext, useEffect } from "react";
import { useState } from "react";
import whitelistData from "data/whitelist.json";
import whitelistData1 from "data/whitelist1.json";
import whitelistData2 from "data/whitelist2.json";
import { ethers } from "ethers";
import {
	CONTRACT_ADDR,
	EXPLORER_URI,
	NETWORK_ID,
	OPENSEA_LINK,
} from "data/constants";
import { ERC721_ABI } from "data/erc721_abi";
import { useConnectWallet } from "@web3-onboard/react";

const initialState = {
	whitelist: whitelistData,
	whitelist1: whitelistData1,
	whitelist2: whitelistData2 as typeof whitelistData1,
	totalMinted: 0,
	amount: 1,
	stage: null as null | number,

	balanceOf: null,
	dialogConfirmation: false,
	tokenID: null,
	contract: null as null | ethers.Contract,
	account: null as string | null,
	contractAddress: CONTRACT_ADDR,
	txHash: "",
	ethers: null as null | ethers.providers.Web3Provider,
	signer: null as null | ethers.providers.JsonRpcSigner,
	provider: "not_web3",
	isLoading: false,
	loadingText: "loading...",
	boxError: false,
	errorText: "",
	dialogAdoptMany: false,
	dialogError: false,
	walletAddress: null,
	pricePerNFTWei: 10000000000000000,
	maxSupply: 1000,
	maxFlashSale: null,
	explorerURI: EXPLORER_URI,
	openseaLink: OPENSEA_LINK,
	ownedNFTs: [],
	id: "",
};

const MintContext = React.createContext(initialState);

let setMintData: React.Dispatch<React.SetStateAction<typeof initialState>>;
export function useMint(): [typeof initialState, typeof setMintData] {
	return [useContext(MintContext), setMintData];
}

export default function MintProvider({ children }: { children: any }) {
	let mintData: typeof initialState;

	[mintData, setMintData] = useState(initialState);
	const [{ wallet }] = useConnectWallet();

	useEffect(() => {
		const stateEthers = wallet
			? new ethers.providers.Web3Provider(wallet.provider, NETWORK_ID)
			: null;
		const contract = stateEthers
			? new ethers.Contract(CONTRACT_ADDR, ERC721_ABI, stateEthers)
			: null;
		setMintData((s) => ({ ...s, ethers: stateEthers, contract }));
	}, [wallet, wallet?.provider]);

	return (
		<MintContext.Provider value={mintData}>{children}</MintContext.Provider>
	);
}
