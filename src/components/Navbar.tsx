import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { DISCORD_LINK, INNER_WIDTH, TWITTER_LINK } from "data/constants";
import { Box, SxProps, useTheme } from "@mui/material";
import { useAppData } from "../contexts/AppContext";
import assets from "data/assets";
import Twitter from "./svg/Twitter";
import DiscordFilled from "./svg/DiscordFilled";

interface INavbar {
	connectWalletBtn?: React.ReactNode;
	sx?: SxProps;
}

export default function Navbar({ connectWalletBtn, sx = {} }: INavbar) {
	const [appData, setAppData] = useAppData();
	const { connectWalletPressed } = appData;
	function handleWalletPress() {
		setAppData(() => ({ ...appData, connectWalletPressed: true }));
	}
	const { palette } = useTheme();
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
				...sx,
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
					<img src={assets.logo} alt="" />
				</Box>
			</a>
			<Stack gap={3} direction="row" alignItems={"center"}>
				<Box
					sx={{
						"&,a": { display: { xs: "none", sm: "grid" } },
						placeItems: "center",
						"*": {
							fill: palette.primary.main,
							color: palette.primary.main,
						},
					}}
				>
					<a href={TWITTER_LINK}>
						{/* <img src={assets.twitter} alt="" /> */}
						<Twitter />
					</a>
				</Box>

				<Box
					sx={{
						"&,a": { display: { xs: "none", sm: "grid" } },
						placeItems: "center",
						"*": {
							fill: palette.primary.main,
							color: palette.primary.main,
						},
					}}
				>
					<a href={DISCORD_LINK}>
						<DiscordFilled />
						{/* <img src={assets.discordContained} alt="" /> */}
					</a>
				</Box>
				{connectWalletBtn || (
					<Button
						variant="contained"
						startIcon={<img alt="" src="/images/wallet.svg" />}
						onClick={handleWalletPress}
						color={connectWalletPressed ? "secondary" : "primary"}
					>
						{connectWalletPressed ? "(NOT YET)" : "Connect Wallet"}
					</Button>
				)}
			</Stack>
		</Stack>
	);
}
