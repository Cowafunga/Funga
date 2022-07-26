import { init, useConnectWallet } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import { NETWORK_ID, NETWORK_NAME, RPC_PROVIDER } from "data/constants";
import Mint from "components/newDapp/Mint";
import { Alert, Button } from "@mui/material";
import { useEffect, useRef } from "react";
import { Box, Stack, ThemeProvider } from "@mui/material";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import assets from "data/assets";
import theme from "contexts/theme";
import walletConnectModule from "@web3-onboard/walletconnect";
import { useSetChain } from "@web3-onboard/react";

window.Buffer = window.Buffer || require("buffer").Buffer;

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

// const onboard = Onboard({
// 	// ... other Onboard options
// 	wallets: [
// 		walletConnect,
// 		injected,
// 		//... other wallets
// 	],
// 	chains: [
// 		{
// 			id: `0x${NETWORK_ID}`,
// 			token: "ETH",
// 			label: NETWORK_NAME,
// 			rpcUrl,
// 		},
// 	],
// });
// onboard.connectWallet();
// Sign up to get your free API key at https://explorer.blocknative.com/?signup=true
// const dappId = "1730eff0-9d50-4382-a3fe-89f0d34a2070";

// const infuraKey = "<INFURA_KEY>";

// initialize Onboard
init({
	wallets: [injected, walletConnect],
	chains: [
		{
			id: `0x${NETWORK_ID}`,
			token: "ETH",
			label: NETWORK_NAME,
			rpcUrl,
		},
	],
});

export default function NewDapp() {
	const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
	const [
		{
			connectedChain, // the current chain the user's wallet is
		},
	] = useSetChain();
	console.log(!connectedChain ? "no chaing" : connectedChain.id);

	const containerRef = useRef<HTMLDivElement>(null);
	const imgContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current as HTMLDivElement;
		const imgContainer = imgContainerRef.current as HTMLDivElement;
		function handler() {
			container.style.minHeight = window.innerHeight + "px";
			imgContainer.style.marginTop = imgContainer.offsetHeight * 0.3 + "px";
		}
		handler();
		const img = imgContainer.querySelector("img");
		img?.addEventListener("load", handler);
		window.addEventListener("resize", handler);
		return () => {
			window.removeEventListener("resize", handler);
		};
	}, []);
	// position the element created by dapp library
	useEffect(() => {
		const interval = setInterval(() => {
			if (wallet) {
				let elem = document.querySelector("onboard-v2") as HTMLElement;
				if (!elem) return;
				let parent = elem.shadowRoot as ShadowRoot;

				if (!parent) return;

				let content = parent.querySelector("div");

				if (!content) return;
				content.style.top = "50px";
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [wallet]);

	return (
		<div>
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
						overflow: "hidden",
						maxWidth: "100%",
						justifyContent: "space-between",
					}}
				>
					<Box>
						<Navbar
							sx={{ zIndex: 100, position: "relative" }}
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
						<Box
							sx={{
								position: "relative",
								".star-img": {
									transform: "translateX(-50%) translateY(-50%)",
									// maxWidth: "100vw",
									// maxHeight: "100vh",
								},
							}}
							ref={imgContainerRef}
						>
							<img
								style={{
									width: "min(522px, 90%)",
									position: "relative",
									left: "50%",
									zIndex: 2,
									transform: "translateX(-50%)",
									display: "block",
								}}
								src={assets.mintPage2Images}
								alt="three fungus"
							/>
							<img
								className="star-img"
								style={{
									width: "min(1300px, 200%)",
									position: "absolute",
									top: "50%",
									left: "50%",
									transform: "translateX(-50) translateY(-50%)",
								}}
								src={assets.star}
								alt="three fungus"
							/>
						</Box>

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
					{connectedChain && Number(connectedChain.id) !== NETWORK_ID && (
						<Alert
							sx={{ my: 2, alignSelf: "center", mx: "atuo", width: "90%" }}
							color="error"
						>
							Warning! Not connected to the
							{NETWORK_NAME} network!
						</Alert>
					)}
					<Footer
						sx={{
							marginTop: "50px",
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
							".links": {
								"&>*": {
									ml: "8px",
								},
							},
						}}
					/>
				</Stack>
			</ThemeProvider>
		</div>
	);
}
