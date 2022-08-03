import React from "react";
import Stack from "@mui/material/Stack";
import {
	DISCORD_LINK,
	INNER_WIDTH,
	OPENSEA_COLLECTION,
	TWITTER_LINK,
} from "data/constants";
import { Box, Button, SxProps, useTheme } from "@mui/material";
import assets from "data/assets";
import Twitter from "./svg/Twitter";
import DiscordFilled from "./svg/DiscordFilled";
import { Link } from "react-router-dom";
import OpenseaIcon from "./svg/Opensea";

interface INavbar {
	connectWalletBtn?: React.ReactNode;
	sx?: SxProps;
}

export default function Navbar({ connectWalletBtn, sx = {} }: INavbar) {
	const { palette } = useTheme();
	return (
		<Stack
			className="navbar"
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
			<Link to={{ pathname: "/#" }}>
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
			</Link>
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
					</a>
				</Box>
				<a href={OPENSEA_COLLECTION}>
					<Button
						// startIcon={<img alt="" src={assets.wallet} />}
						startIcon={<OpenseaIcon />}
						variant="contained"
					>
						Buy on OS
					</Button>
				</a>
			</Stack>
		</Stack>
	);
}
