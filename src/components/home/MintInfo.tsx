import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PublicIcon from "@mui/icons-material/Public";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import appendDublicate from "../../utils/appendDublicate";

export default function MintInfo() {
	return (
		<Stack
			justifyContent="space-between"
			direction="column"
			alignItems="center"
			alignSelf="stretch"
			sx={{ position: "relative", zIndex: 30 }}
		>
			<Arrow />
			<Grid container sx={{ position: "relative", zIndex: 50, mt: 5 }}>
				<Grid item sx={{ display: "flex", justifyContent: "center" }} xs={6}>
					<Frame />
				</Grid>

				<Grid
					sx={{
						display: "flex",
						justifyContent: "center",
						position: "relative",
						zIndex: 500,
					}}
					item
					xs={6}
				>
					<MintInfoDetails />
				</Grid>
				<Grid xs={12} item>
					<GrassHorizontal />
				</Grid>
			</Grid>
			<Grass />
		</Stack>
	);
}

function Frame() {
	const { palette } = useTheme();
	return (
		<Box sx={{ position: "relative" }}>
			<Box sx={{ width: 370, height: 370, position: "relative" }}>
				<img
					style={{ width: 370, height: 370, position: "relative", zIndex: 15 }}
					src="/mintinfo4.png"
					alt="Mint info"
				/>
				{/* Mushrooms */}

				<Box
					sx={{
						zIndex: 15,
						position: "absolute",
						bottom: "-25%",
						left: "80%",
					}}
				>
					<img
						style={{ width: 250, height: 250, transform: "rotate(80deg)" }}
						src="/Green Numen.png"
						alt=""
					/>

					<img
						style={{ position: "absolute", bottom: 25, left: -25 }}
						src="/mushroom2.png"
						alt=""
					/>
				</Box>
			</Box>

			<Star />

			{/* Shadow */}
			<Box
				className="Green shadow"
				id="green"
				sx={{
					position: "absolute",
					width: "0%",
					height: "0%",
					top: "20%",
					zIndex: 5,
					left: "62%",
					borderRadius: "100%",
					// backgroundColor: palette.primary.main,
					boxShadow: `0px 0px 300px 155px ${palette.primary.main}`,
					// top: "50%",
					// left: "50%",
					// transform: "translateX(-50%, -50%)",
				}}
			></Box>
		</Box>
	);
}

function Star() {
	return (
		<Box
			sx={{
				top: "50%",
				left: "25%",
				zIndex: 10,
				transform: "translate(-50%, -50%)",
				position: "absolute",
			}}
		>
			<img style={{ width: 1805, height: 984 }} src="/star.png" alt="Star" />
		</Box>
	);
}

function MintInfoDetails() {
	const { custom, palette } = useTheme();

	return (
		<Stack
			justifyContent="space-between"
			sx={{ alignSelf: "stretch", position: "relative", zIndex: 500 }}
			alignItems="center"
		>
			<Typography
				sx={{
					textAlign: "center",
					fontFamily: "Geska Rolling",
					width: "100%",
					whiteSpace: "nowrap",
					fontSize: "90px",
					// transform: "translateX(-50%)",
					textShadow: appendDublicate({
						text: `0 0 12px ${"#4BAD90"}`,
						times: 50,
					}),
				}}
				variant="h1"
				color={custom.yellow.main}
			>
				mint info
			</Typography>

			<Grid
				sx={{ transform: "translateX(10%)" }}
				justifyContent="center"
				container
			>
				{[
					{ text: "Free mint", icon: <AccountBalanceWalletIcon /> },
					{ text: "July 30, 2022", icon: <WatchLaterIcon /> },

					{
						text: "Team is keeping 100",
						icon: <PeopleIcon />,
					},
					{ text: "3,333 Figure", icon: <PublicIcon /> },
				].map((item) => {
					return (
						<Grid item sx={{ display: "flex", my: 1.4 }} key={item.text} xs={6}>
							<Stack
								sx={{ fontSize: "20px", svg: { fontSize: "28px" } }}
								gap={3}
								direction="row"
							>
								<Box sx={{ color: palette.success.main }}>{item.icon}</Box>
								<Typography sx={{ fontSize: "20px" }} color="white">
									{item.text}
								</Typography>
							</Stack>
						</Grid>
					);
				})}
			</Grid>
			<Button
				sx={{
					mx: "auto",
					fontSize: "17px",
					width: "275px",
					height: "54px",
					borderRadius: "8px",
				}}
				startIcon={<LocalHospitalIcon />}
				variant="contained"
				color="success"
				size="large"
			>
				Mintng page
			</Button>
		</Stack>
	);
}

function Arrow() {
	const { palette } = useTheme();

	return (
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
	);
}

function Grass() {
	return (
		<Box sx={{ top: -100, position: "absolute", left: 0 }}>
			<img src="grass back.png" alt="Grass" />
		</Box>
	);
}

function GrassHorizontal() {
	return (
		<Box
			sx={{
				height: 130,
				width: "100%",
				overflow: "visible",
				zIndex: 15,
				position: "relative",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					top: "50%",

					transform: "translateY(-50%) scaleY(0.6)",
				}}
			>
				<img src="grass front.png" alt="Grass" />
			</Box>
		</Box>
	);
}
