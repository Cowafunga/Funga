import React from "react";
import Stack from "@mui/material/Stack";
import {
	DISCORD_LINK,
	INNER_WIDTH,
	OPENSEA_COLLECTION,
	TWITTER_LINK,
} from "data/constants";
import { Box, Button, SxProps, Typography, useTheme } from "@mui/material";
import assets from "data/assets";
import Twitter from "./svg/Twitter";
import DiscordFilled from "./svg/DiscordFilled";
import { Link } from "react-router-dom";
import OpenseaIcon from "components/svg/Opensea";
// import ConnectWalletBtn from "./ConnectWalletBtn";

interface IFooter {
	sx?: SxProps;
}

export default function Footer({ sx = {} }: IFooter) {
	const { palette } = useTheme();

	return (
		<Stack sx={{ ...sx }}>
			<Stack
				className="top-row"
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
					gap: 3,
					"&>*": {
						flexBasis: 0,
					},
				}}
				alignItems="center"
				flexDirection={{ xs: "column", "700": "row !important" } as any}
				justifyContent={{ xs: "space-evenly", vsm: "space-between !Important" }}
				direction="row"
			>
				{/* Logo */}
				<Link to={{ pathname: "/", search: "#" }}>
					<Box
						onClick={() => document.body.scrollTo({ top: 0 })}
						sx={{
							display: "grid",
							placeItems: "center",
							width: { xs: "75px", sm: "125px" },
						}}
					>
						<img
							style={{ objectFit: "contain", width: "100%" }}
							src={assets.logo}
							alt=""
						/>
					</Box>
				</Link>

				{/* Button and Links */}
				<Stack
					className="links"
					alignSelf={{ xs: "stretch", "700": "center !important" }}
					justifyContent={"space-between"}
					gap={3}
					direction={{ xs: "column", "350": "row !important" } as any}
					alignItems={"center"}
				>
					<Box
						sx={{
							"&,a": { display: { xs: "grid" } },
							placeItems: "center",
							"*": {
								fill: palette.primary.main,
								color: palette.primary.main,
							},
						}}
					>
						<a href={TWITTER_LINK}>
							<Twitter />
						</a>
					</Box>
					<Box
						className="connect-wallet-button"
						sx={{ display: { sm: "none !important", xs: "inline-flex" } }}
					>
						<a href={OPENSEA_COLLECTION}>
							<Button
								sx={{ ".MuiButton-endIcon": { ml: "2px" } }}
								endIcon={<OpenseaIcon />}
								variant="contained"
							>
								View on
							</Button>
						</a>
					</Box>
					<Box
						sx={{
							"&,a": { display: { xs: "grid" } },
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
					<Box
						sx={{
							width: "max-content",
							display: { sm: "inline-flex !important", xs: "none" },
						}}
						className="connect-wallet-button"
					>
						<a href={OPENSEA_COLLECTION}>
							<Button
								sx={{ ".MuiButton-endIcon": { ml: "2px" } }}
								// startIcon={<img alt="" src={assets.wallet} />}
								endIcon={<OpenseaIcon />}
								variant="contained"
							>
								View on
							</Button>
						</a>
					</Box>
				</Stack>
			</Stack>

			<Typography
				className="all-rights-reserverd"
				sx={{
					color: "white",
					mb: 3,
					opacity: 0.6,
					left: "50%",
					textAlign: "center",
				}}
			>
				Funga™️ 2022. All rights reserved
			</Typography>
		</Stack>
	);
}
