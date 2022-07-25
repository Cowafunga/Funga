import React, { useEffect, useRef } from "react";
import { Box, Stack, ThemeProvider } from "@mui/material";
import ConnectWallet from "components/dapp/ConnectWallet";
import Mint from "components/dapp/Mint";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import assets from "data/assets";
import theme from "contexts/theme";
export default function Dapp() {
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
	return (
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
					background: "linear-gradient(0.13deg, #CCFFF0 0.1%, #FFFFFF 74.99%)",
					minHeight: "100vh",
					justifyContent: "space-between",
				}}
			>
				<Box>
					<Navbar connectWalletBtn={<ConnectWallet />} />
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
						<Mint />
					</Box>
				</Box>
				<Footer
					sx={{
						color: "black",
						".all-rights-reserverd": {
							opacity: "1 !important",
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
	);
}
