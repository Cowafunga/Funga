import { Button } from "@mui/material";
import { ethers } from "ethers";
import { useState } from "react";
import {
	RPC_PROVIDER,
	NETWORK_ID,
	NETWORK_NAME,
	CONTRACT_ADDR,
} from "../../dapp/constants/constants";

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
	const [state, setState] = useState({
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
		const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
		await provider.send("eth_requestAccounts", []);

		// commented as per self logic as it's be reassigned directily below
		// state.signer = provider.getSigner();

		const stateEthers = new ethers.providers.Web3Provider(
			window.ethereum,
			"any"
		);

		{
			// state.ethers = stateEthers;

			const signer = stateEthers.getSigner(); //state var

			const [account, balance, selectedAddress, network] = await Promise.all([
				signer.getAddress(),
				signer.getBalance(),
				signer.getAddress(),
				stateEthers.getNetwork(),
			]);

			const chainId = network.chainId;
			const ethBalance = ethers.utils.formatEther(balance);
			const walletBtnText = trimWalletBtnAddress(selectedAddress);
			const showNonMainnetWarning = chainId !== NETWORK_ID;

			setState((s) => ({
				...s,
				account,
				balance,
				selectedAddress,
				chainId,
				ethBalance,
				walletBtnText,
				showNonMainnetWarning,
				ethers: stateEthers,
			}));
		}

		stateEthers.on("network", (newNetwork, oldNetwork) => {
			if (oldNetwork) {
				setState((s) => ({ ...s, chainId: newNetwork.chainId }));
				// state.chainId = newNetwork.chainId;
			}

			if (Number(newNetwork.chainId) !== Number(NETWORK_ID)) {
				setState((s) => ({ ...s, showNonMainnetWarning: true }));
				// state.showNonMainnetWarning = true;
			} else {
				setState((s) => ({
					...s,
					showNonMainnetWarning: false,
				}));
				// state.showNonMainnetWarning = false;
			}

			console.log("newNetwork.chainId :>> ", newNetwork.chainId);
		});

		window.ethereum.on("accountsChanged", async (accounts: any) => {
			if (accounts.length < 1) return;
			const selectedAddress = accounts[0];
			const walletBtnText = trimWalletBtnAddress(accounts[0]);

			// The below part is in addition to dapp considering that it's a mistake it's not there as this logic seems it should run on accountsChanges
			const { chainId } = await stateEthers.getNetwork();
			const showNonMainnetWarning = chainId !== NETWORK_ID;

			setState((s) => ({
				...s,
				chainId,
				showNonMainnetWarning,
				selectedAddress,
				walletBtnText,
			}));
		});
	}
	console.log(state);
	return (
		<Button onClick={metamaskBtnClicked} variant="contained">
			{state.walletBtnText}
		</Button>
	);
}

function trimWalletBtnAddress(addr: string) {
	return (
		addr.substring(0, 8) + "..." + addr.substring(addr.length - 5, addr.length)
	);
}
