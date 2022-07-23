import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { DISCORD_LINK, INNER_WIDTH, TWITTER_LINK } from "../constants";
import { Box } from "@mui/material";
import { useAppData } from "../contexts/AppContext";

export default function Navbar() {
	const [appData, setAppData] = useAppData();
	const { connectWalletPressed } = appData;
	function handleWalletPress() {
		setAppData(() => ({ ...appData, connectWalletPressed: true }));
	}
	return (
		<Stack
			sx={{
				alignSelf: "start",
				position: "static",
				top: 0,
				boxSizing: "border-box",
				py: 2,
				px: { sm: 3, xs: 1 },
				mx: "auto",
				width: `min(${INNER_WIDTH}px, 100%)`,
				zIndex: 10,
				gap: 1,
				// "&>*": {
				// 	mx: "auto",
				// },
			}}
			alignItems="center"
			flexDirection={{ xs: "column", "300": "row !important" } as any}
			justifyContent={{ xs: "space-evenly", vsm: "space-between !Important" }}
			direction="row"
		>
			<a href="/#">
				<Box
					sx={{
						display: "grid",
						placeItems: "center",
						width: { xs: "75px", sm: "125px" },
						img: {
							width: { xs: "75px", sm: "125px" },
							objectFit: "contain",
						},
					}}
				>
					{/* <img src="/images/logo.svg" alt="" /> */}
					<img src="/images/logo high res 2.png" alt="" />
				</Box>
			</a>
			<Stack gap={3} direction="row" alignItems={"center"}>
				<Box
					sx={{
						"&,a": { display: { xs: "none", sm: "grid" } },
						placeItems: "center",
					}}
				>
					<a href={TWITTER_LINK}>
						<img src="/images/twitter.svg" alt="" />
					</a>
				</Box>

				<Box
					sx={{
						"&,a": { display: { xs: "none", sm: "grid" } },
						placeItems: "center",
					}}
				>
					<a href={DISCORD_LINK}>
						{" "}
						<img src="/images/discord filled.svg" alt="" />
					</a>
				</Box>
				<Button
					variant="contained"
					startIcon={<img alt="" src="/images/wallet.svg" />}
					onClick={handleWalletPress}
					color={connectWalletPressed ? "secondary" : "primary"}
				>
					{connectWalletPressed ? "(NOT YET)" : "Connect Wallet"}
				</Button>
			</Stack>
		</Stack>
	);
}
