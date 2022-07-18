import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PublicIcon from "@mui/icons-material/Public";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useTheme } from "@emotion/react";
import appendDublicate from "../utils/appendDublicate";

export default function MintInfo() {
	const { custom, palette } = useTheme() as any;
	return (
		<Stack direction="column" alignItems="center">
			<Stack
				alignItems="center"
				sx={{
					filter: appendDublicate({
						text: `drop-shadow(3px -1px 2px ${palette.primary.main})`,
						times: 2,
						separator: " ",
					}),
					my: 10,
				}}
			>
				<img src="/arrow-down.png" alt="arrow" />
			</Stack>
			<Box sx={{ position: "relative" }}>
				<img
					style={{ width: "619px", height: "358px" }}
					src="/mintinfo.png"
					alt="pose"
				/>

				<Box
					sx={{
						width: "100%",
						position: "absolute",
						bottom: 0,
						"&>:first-child": {
							position: "absolute",
							left: "0",
							transform: "translateX(-10%)",
							bottom: -50,
						},
						"&>:nth-of-type(2)": {
							position: "absolute",
							right: 0,

							transform: "translateX(5%) rotate(90deg) scale(0.5)",
							bottom: -70,
						},
					}}
				>
					<img src="/Green Numen.png" alt="pose" />
					<img src="/Green Numen.png" alt="pose" />
				</Box>
				<Typography
					sx={{
						textAlign: "center",
						fontFamily: "Geska Rolling",
						position: "absolute",
						bottom: -12,
						left: "50%",
						whiteSpace: "nowrap",
						transform: "translateX(-50%)",
						textShadow: appendDublicate({
							text: `0 0 24px ${custom.purple.main}`,
							times: 10,
						}),
					}}
					variant="h1"
					color={custom.pink.main}
				>
					Mint info
				</Typography>
			</Box>

			<Grid
				sx={{ mt: 5, transform: "translateX(15%)" }}
				justifyContent="center"
				container
			>
				{[
					{ text: "Team is keeping 100", icon: <PeopleIcon /> },
					{ text: "3,333 Figure", icon: <PublicIcon /> },
					{ text: "July 30, 2022", icon: <WatchLaterIcon /> },
					{ text: "Free min", icon: <AccountBalanceWalletIcon /> },
				].map((item) => {
					return (
						<Grid sx={{ display: "flex", my: 1 }} key={item.text} xs={6}>
							<Stack gap={3} direction="row">
								<Box sx={{ color: palette.primary.main }}>{item.icon}</Box>
								<Typography color="white">{item.text}</Typography>
							</Stack>
						</Grid>
					);
				})}
			</Grid>
			<Button
				sx={{ mx: "auto", my: 4 }}
				startIcon={<LocalHospitalIcon />}
				variant="contained"
				size="large"
			>
				Minitng page
			</Button>
		</Stack>
	);
}
