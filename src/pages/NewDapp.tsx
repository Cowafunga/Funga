import { init, useConnectWallet } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import {
	NETWORK_ID,
	NETWORK_NAME,
	RPC_PROVIDER,
} from "dapp/constants/constants";
import Mint from "components/newDapp/Mint";
import { Button } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Box, Stack, ThemeProvider } from "@mui/material";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import assets from "data/assets";
import theme from "contexts/theme";
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

export default function NewApp() {
	const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current as HTMLDivElement;
		function handler() {
			container.style.minHeight = window.innerHeight + "px";
		}
		handler();
		window.addEventListener("resize", handler);
		return () => {
			window.removeEventListener("resize", handler);
		};
	}, []);
	// position the element created by dapp library
	useEffect(() => {
		setInterval(() => {
			if (wallet) {
				let elem = document.querySelector("onboard-v2") as HTMLElement;
				console.log({ elem });
				if (!elem) return;
				let parent = elem.shadowRoot as ShadowRoot;
				console.log({ parent });

				if (!parent) return;

				let content = parent.querySelector("div");
				console.log({ content });
				if (!content) console.log("No-content");

				if (!content) return;
				content.style.top = "100px";
			}
		}, 1000);
	}, [wallet]);

	return (
		<div>
			{/* <button
				disabled={connecting}
				onClick={() => (wallet ? disconnect(wallet) : connect())}
			>
				{connecting ? "connecting" : wallet ? "disconnect" : "connect"}
			</button> */}

			<ThemeProvider
				theme={{
					...theme,
					palette: { ...theme.palette, primary: theme.palette.success },
				}}
			>
				<Stack
					ref={containerRef}
					sx={{
						boxSizing: "border-box",
						background:
							"linear-gradient(0.13deg, #CCFFF0 0.1%, #FFFFFF 74.99%)",
						minHeight: "100vh",
						justifyContent: "space-between",
					}}
				>
					<Box>
						<Navbar
							connectWalletBtn={
								<Button
									onClick={() => (wallet ? disconnect(wallet) : connect())}
									startIcon={<img alt="" src={assets.wallet} />}
									variant="contained"
								>
									{connecting
										? "connecting"
										: wallet
										? "disconnect"
										: "Connect Wallet"}{" "}
								</Button>
							}
						/>
						<img
							style={{
								width: "min(926px, 130%)",
								position: "relative",
								left: "50%",
								transform: "translateX(-50%)",
								display: "block",
							}}
							src={assets.mintPageImages}
							alt="three fungus"
						/>
						{/* <img
					style={{ width: "min(389px, 80%)", display: "block", margin: "auto" }}
					src={assets.freeMintText}
					alt="free mint"
				/> */}
						<Box
							sx={{
								// py: 10,
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
							{/* <ConnectWallet /> */}
							{wallet ? (
								<Mint />
							) : (
								<Button
									onClick={() => (wallet ? disconnect(wallet) : connect())}
									sx={{ textTransform: "initial" }}
									variant="contained"
									size="large"
									// color="success"
									startIcon={<img alt="Mint icon" src={assets.medicalKit} />}
								>
									Mint a funga
								</Button>
							)}
						</Box>
					</Box>
					<Footer
						sx={{
							color: "black",
							".all-rights-reserverd": {
								opacity: "1 !important",
								color: "black",
							},
							".connect-wallet-button": {
								display: "none !important",
							},
							".top-row, .links": {
								flexDirection: "row !important",
							},
						}}
					/>
				</Stack>
			</ThemeProvider>
		</div>
	);
}
