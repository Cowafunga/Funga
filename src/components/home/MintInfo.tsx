import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useAppData } from "../../contexts/AppContext";

export default function MintInfo() {
	const [appData, setAppData] = useAppData();
	const { mintBtnPressed } = appData;
	return (
		<Stack
			justifyContent="space-between"
			direction="column"
			alignItems="center"
			alignSelf="stretch"
			sx={{ position: "relative", zIndex: 20000 }}
		>
			<Arrow />
			<Grid container sx={{ position: "relative", zIndex: 50, mt: 5 }}>
				<Grid
					sx={{
						display: { xs: "flex", md: "none" },
						justifyContent: "center",
						position: "relative",
						zIndex: 500,
					}}
					item
					xs={12}
					md={6}
				>
					<MintInfoDetails />
				</Grid>

				<Grid
					item
					sx={{
						mt: { xs: "45px", md: 0 },
						display: "flex",
						justifyContent: "center",
					}}
					xs={12}
					md={6}
				>
					<Frame />
				</Grid>

				<Grid
					sx={{
						display: { xs: "none", md: "flex" },
						justifyContent: "center",
						position: "relative",
						zIndex: 500,
					}}
					item
					xs={12}
					md={6}
				>
					<MintInfoDetails />
				</Grid>
				<Grid sx={{ position: "relative" }} xs={12} item>
					<GrassHorizontal />
					<Button
						sx={{
							mx: "auto",
							fontSize: "17px",
							width: "min(95%, 275px)",
							zIndex: 900,
							left: "50%",
							top: "250%",
							transform: "translateX(-50%) translateY(-50%)",
							position: "absolute",
							height: "54px",
							display: { md: "none", xs: "flex" },
						}}
						onClick={() => setAppData((d) => ({ ...d, mintBtnPressed: true }))}
						startIcon={<img src="/images/medical kit.svg" alt="Medical kit" />}
						variant="contained"
						color={mintBtnPressed ? "secondary" : "success"}
					>
						{mintBtnPressed ? "Coming soon..." : "Minting page"}
					</Button>
				</Grid>
			</Grid>
			<Grass />
		</Stack>
	);
}

function Frame() {
	const { palette } = useTheme();
	return (
		<Box
			sx={{
				display: "grid",
				placeItems: "center",
				position: "relative",
			}}
		>
			<Box
				sx={{
					width: "min(75%, 370px)",
					aspectRatio: "1/1",
					display: "grid",
					placeItems: "center",
					position: "relative",
				}}
			>
				<video
					src={"/videos/Funga Flip.mp4"}
					style={{
						borderRadius: "10px",
						width: "100%",
						position: "relative",
						zIndex: 15,
					}}
					autoPlay
					muted
					loop
					playsInline
				></video>
				{/* <img
					style={{
						width: "100%",
						position: "relative",
						zIndex: 15,
					}}
					src="/mintinfo4.png"
					alt="Mint info"
				/> */}
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
	const { palette } = useTheme();
	const [appData, setAppData] = useAppData();
	const { mintBtnPressed } = appData;

	return (
		<Stack
			justifyContent="space-between"
			sx={{
				gap: { md: 0, xs: 4 },
				alignSelf: "stretch",
				position: "relative",
				zIndex: 500,
			}}
			alignItems="center"
		>
			<img src="/mint info text.png" style={{ width: "68%" }} alt="" />
			{/* <Typography
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
			</Typography> */}

			<Grid
				sx={{
					// display: { md: "grid", xs: "flex" },
					// flexDirection: "column",
					width: { xs: "min-content", md: "auto" },
					transform: { md: "translateX(10%)" },
				}}
				justifyContent="center"
				container
			>
				{[
					{
						text: "Free mint",
						icon: <img src="/images/free mint wallet.svg" alt="wallet" />,
					},
					{
						text: "July 30, 2022",
						icon: <img src="images/clock.svg" alt="Clock" />,
					},

					{
						text: "Team is keeping 100",
						icon: <img src="/images/people.svg" alt="People" />,
					},
					{
						text: "3,333 Fungas",
						icon: <img src="/images/globe.svg" alt="Globe" />,
					},
				].map((item) => {
					return (
						<Grid
							item
							sx={{
								minWidth: 0,
								width: { xs: "270px", md: "auto" },
								display: "flex",
								my: 1.4,
							}}
							key={item.text}
							xs={12}
							md={6}
						>
							<Stack
								sx={{
									display: "flex",
									fontSize: "20px",
									svg: { fontSize: "28px" },
									position: "relative",
									// left: { xs: "40%", md: 0 },
								}}
								gap={3}
								alignItems="center"
								direction="row"
							>
								<Box
									sx={{
										width: "36px",
										height: "36px",
										color: palette.success.main,
										img: {
											width: "100%",
											height: "100%",
										},
									}}
								>
									{item.icon}
								</Box>
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
					display: { xs: "none", md: "inline-flex" },
				}}
				onClick={() => setAppData((d) => ({ ...d, mintBtnPressed: true }))}
				startIcon={<img src="/images/medical kit.svg" alt="Medical kit" />}
				variant="contained"
				color={mintBtnPressed ? "secondary" : "success"}
			>
				{mintBtnPressed ? "Coming soon..." : "Minting page"}
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
				// filter: appendDublicate({
				// 	text: `drop-shadow(3px -1px 2px ${palette.primary.main})`,
				// 	times: 2,
				// 	separator: " ",
				// }),
				my: { xs: 5, md: 10 },
			}}
		>
			<img src="/images/arrow down.png" alt="arrow" />
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
				height: { xs: 40, md: 130 },
				width: "100%",
				overflow: "visible",
				zIndex: 15,
				top: 50,
				position: "relative",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					top: "50%",

					transform: {
						xs: "translateY(-50%) scaleY(0.4)",
						md: "translateY(-50%) scaleY(0.6)",
					},
				}}
			>
				<img src="grass front.png" alt="Grass" />
			</Box>
		</Box>
	);
}
