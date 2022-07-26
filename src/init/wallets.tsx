import trezorModule from "@web3-onboard/trezor";
import ledgerModule from "@web3-onboard/ledger";
import walletConnectModule from "@web3-onboard/walletconnect";
import injectedModule from "@web3-onboard/injected-wallets";
import { init } from "@web3-onboard/react";
import { NETWORK_ID, NETWORK_NAME, RPC_PROVIDER } from "data/constants";
import assets from "data/assets";

const rpcUrl = RPC_PROVIDER;
const injected = injectedModule();

const walletConnect = walletConnectModule({
	bridge: "https://bridge.walletconnect.org/",
	qrcodeModalOptions: {
		mobileLinks: [
			"metamask",
			"trust",
			"rainbow",
			"argent",
			"imtoken",
			"pillar",
		],
	},
});

// const infuraKey = "<INFURA_KEY>";

// initialize Onboard
init({
	wallets: [
		injected,
		walletConnect,
		trezorModule({
			email: "Alex@funga.io",
			appUrl: window.location.href,
		}),
		ledgerModule(),
	],
	chains: [
		{
			id: `0x${NETWORK_ID}`,
			token: "ETH",
			label: NETWORK_NAME,
			rpcUrl,
		},
	],
	appMetadata: {
		name: "Funga and Friends",
		icon: window.location.origin + assets.logo,
		description: "Mint awesome NFTs",
		recommendedInjectedWallets: [
			{ name: "MetaMask", url: "https://metamask.io/" },
		],
	},
});
