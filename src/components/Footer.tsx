import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { DISCORD_LINK, INNER_WIDTH, TWITTER_LINK } from "../constants";
import { Box } from "@mui/material";
import { useAppData } from "../contexts/AppContext";

export default function Footer() {
	const [appData, setAppData] = useAppData();
	const { connectWalletPressed } = appData;
	function handleWalletPress() {
		setAppData(() => ({ ...appData, connectWalletPressed: true }));
	}

	return (
		<Stack>
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
					gap: 3,
					// "&>*": {
					// 	mx: "auto",
					// },
					"&>*": {
						flexBasis: 0,
					},
				}}
				alignItems="center"
				flexDirection={{ xs: "column", "700": "row !important" } as any}
				justifyContent={{ xs: "space-evenly", vsm: "space-between !Important" }}
				direction="row"
			>
				<a href="/#">
					<Box
						sx={{
							display: "grid",
							placeItems: "center",
							width: { xs: "75px", sm: "125px" },
						}}
					>
						<img
							style={{ objectFit: "contain", width: "100%" }}
							src="/images/logo high res 2.png"
							alt=""
						/>
					</Box>
				</a>

				<Stack
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
						}}
					>
						<a href={TWITTER_LINK}>
							<img src="/images/twitter.svg" alt="" />
						</a>
					</Box>
					<Button
						variant="contained"
						startIcon={<img alt="" src="/wallet.png" />}
						sx={{ display: { sm: "none !important", xs: "inline-flex" } }}
						onClick={handleWalletPress}
						color={connectWalletPressed ? "secondary" : "primary"}
					>
						{connectWalletPressed ? "(NOT YET)" : "Connect Wallet"}
					</Button>
					<Box
						sx={{
							"&,a": { display: { xs: "grid" } },
							placeItems: "center",
						}}
					>
						<a href={DISCORD_LINK}>
							<img src="/images/discord filled.svg" alt="" />
						</a>
					</Box>
					<Button
						variant="contained"
						startIcon={<img alt="" src="/images/wallet.svg" />}
						sx={{
							width: "max-content",
							display: { sm: "inline-flex !important", xs: "none" },
						}}
						onClick={handleWalletPress}
						color={connectWalletPressed ? "secondary" : "primary"}
					>
						{connectWalletPressed ? "(NOT YET)" : "Connect Wallet"}
					</Button>
				</Stack>
			</Stack>
			<p
				style={{
					color: "white",
					opacity: 0.6,
					left: "50%",
					textAlign: "center",
				}}
			>
				Funga™️ 2022. All rights reserved
			</p>
		</Stack>
	);
}
