import { Button } from "@mui/material";
import { ethers } from "ethers";
import { useState } from "react";
import {
	RPC_PROVIDER,
	NETWORK_ID,
	NETWORK_NAME,
	CONTRACT_ADDR,
} from "@dapp/constants/constants";

async function metamaskBtnClicked() {
	const state = {
		signer: null as ethers.providers.JsonRpcSigner | null,
		ethers: null as ethers.providers.Web3Provider | null,
		showNonMainnetWarning: false,
		chainId: "" as string | null | number,
		account: "" as string | null,
		balance: null as ethers.BigNumber | null,
		ethBalance: "" as string | null,
		selectedAddress: "" as string | null,
		walletBtnText: "Connect Wallet",
	};
	const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
	await provider.send("eth_requestAccounts", []);
	state.signer = provider.getSigner();
	state.ethers = new ethers.providers.Web3Provider(window.ethereum, "any");

	state.ethers.on("network", (newNetwork, oldNetwork) => {
		if (oldNetwork) {
			state.chainId = newNetwork.chainId;
		}
		console.log("newNetwork.chainId :>> ", newNetwork.chainId);
		if (Number(newNetwork.chainId) !== Number(NETWORK_ID)) {
			state.showNonMainnetWarning = true;
		} else {
			state.showNonMainnetWarning = false;
		}
	});
	state.signer = state.ethers.getSigner();
	state.account = await state.signer.getAddress();
	state.balance = await state.signer.getBalance();
	state.ethBalance = ethers.utils.formatEther(state.balance);

	state.signer = state.ethers.getSigner();
	state.selectedAddress = await state.signer.getAddress();
	let addr = state.selectedAddress;
	state.walletBtnText =
		addr.substring(0, 8) + "..." + addr.substring(addr.length - 5, addr.length);

	window.ethereum.on("accountsChanged", async (accounts: any) => {
		if (accounts.length < 1) return;
		state.selectedAddress = accounts[0];
		state.walletBtnText =
			accounts[0].substr(0, 8) +
			"..." +
			accounts[0].substr(accounts[0].length - 5, accounts[0].length);

		// The below part is in addition to dapp considering that it's a mistake it's not there as this logic seems it should run on accountsChanges
		if (state.ethers) {
			const { chainId } = await state.ethers.getNetwork();
			state.chainId = chainId;
			if (chainId !== NETWORK_ID) {
				state.showNonMainnetWarning = true;
			}
		}
	});

	const { chainId } = await state.ethers.getNetwork();
	state.chainId = chainId;
	if (chainId !== NETWORK_ID) {
		state.showNonMainnetWarning = true;
	}
}

export default function ConnectWallet() {
	const [state, setData] = useState({
		contractAddress: CONTRACT_ADDR,
		walletBtnText: "CONNECT WALLET",
		networkName: NETWORK_NAME,
		provider: null,
		showNonMainnetWarning: false,
		signer: null as ethers.providers.JsonRpcSigner | null,
		ethers: null as ethers.providers.Web3Provider | null,
		chainId: "" as string | null | number,
		account: "" as string | null,
		balance: null as ethers.BigNumber | null,
		ethBalance: "" as string | null,
		selectedAddress: "" as string | null,
	});

	async function metamaskBtnClicked() {
		const state = {
			signer: null as ethers.providers.JsonRpcSigner | null,
			ethers: null as ethers.providers.Web3Provider | null,
			showNonMainnetWarning: false,
			chainId: "" as string | null | number,
			account: "" as string | null,
			balance: null as ethers.BigNumber | null,
			ethBalance: "" as string | null,
			selectedAddress: "" as string | null,
			walletBtnText: "Connect Wallet",
		};

		const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
		await provider.send("eth_requestAccounts", []);

		state.signer = provider.getSigner();
		state.ethers = new ethers.providers.Web3Provider(window.ethereum, "any");

		state.ethers.on("network", (newNetwork, oldNetwork) => {
			if (oldNetwork) {
				state.chainId = newNetwork.chainId;
			}

			if (Number(newNetwork.chainId) !== Number(NETWORK_ID)) {
				state.showNonMainnetWarning = true;
			} else {
				state.showNonMainnetWarning = false;
			}
			console.log("newNetwork.chainId :>> ", newNetwork.chainId);
		});
		state.signer = state.ethers.getSigner();
		state.account = await state.signer.getAddress();
		state.balance = await state.signer.getBalance();
		state.ethBalance = ethers.utils.formatEther(state.balance);

		state.signer = state.ethers.getSigner();
		state.selectedAddress = await state.signer.getAddress();
		let addr = state.selectedAddress;
		state.walletBtnText =
			addr.substring(0, 8) +
			"..." +
			addr.substring(addr.length - 5, addr.length);

		window.ethereum.on("accountsChanged", async (accounts: any) => {
			if (accounts.length < 1) return;
			state.selectedAddress = accounts[0];
			state.walletBtnText =
				accounts[0].substr(0, 8) +
				"..." +
				accounts[0].substr(accounts[0].length - 5, accounts[0].length);

			// The below part is in addition to dapp considering that it's a mistake it's not there as this logic seems it should run on accountsChanges
			if (state.ethers) {
				const { chainId } = await state.ethers.getNetwork();
				state.chainId = chainId;
				if (chainId !== NETWORK_ID) {
					state.showNonMainnetWarning = true;
				}
			}
		});

		const { chainId } = await state.ethers.getNetwork();
		state.chainId = chainId;
		if (chainId !== NETWORK_ID) {
			state.showNonMainnetWarning = true;
		}
	}

	return <Button variant="contained">Connect Wallet</Button>;
}
