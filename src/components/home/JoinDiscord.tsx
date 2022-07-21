import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import appendDublicate from "../../utils/appendDublicate";
import RepeatElement from "./../RepeatElement";

export default function JoinDiscord() {
	const [showBorders] = useState(false);
	return (
		<Stack
			alignSelf="stretch"
			sx={{
				border: showBorders ? "12px solid blue" : "",
				// overflow: "hidden",
				overflow: "visible",
				my: 15,
				mb: 0,
				position: "relative",
				zIndex: 9999,
			}}
		>
			{/* Top part */}
			<Sunset />
			{/* Bottom part */}
			<BelowSunset />
		</Stack>
	);
}

function BelowSunset() {
	return (
		<Box
			sx={{
				marginTop: {
					xs: "-50px",
					vsm: "-100px",
					sm: "-140px",
					md: "-180px",
					lg: "-215px",
				},
				py: 0.1,
				// background: "red",
				position: "relative",
			}}
		>
			<GroundAndWater />
			<Stack className="contentwrapper" alignSelf="center">
				<Content />
			</Stack>
		</Box>
	);
}

function Content() {
	return (
		<Stack
			className="content"
			sx={{
				width: "100%",
				justifyContent: "center",
				// visibility: "hidden",
				position: { xs: "relative", md: "absolute" },
				bottom: { xs: 0, md: 150 },
				mt: {
					xs: "-190px",
					"300": "-230px !important ",
					"400": "-300px !important",
					"500": "-400px !important",
					"550": "-540px",
					sm: "-470px",
					md: "-470px ",
				},
				zIndex: 30,
				gap: { xs: "50px", md: "0" },
			}}
			direction={{ xs: "column-reverse", md: "row" }}
			alignItems={{ xs: "center", md: "flex-end" }}
		>
			<Stack
				sx={{ bottom: 0, position: "relative" }}
				alignItems={{ xs: "center" }}
			>
				<img
					src="/join discord text.png"
					style={{ width: "min(80%,467px)", position: "relative", zIndex: 20 }}
					alt=""
				/>

				<Button
					size="large"
					color="info"
					startIcon={<img src="/discord-simple.png" alt="Discord" />}
					sx={{
						mt: { xs: 2, "200": 3, "400": 5, sm: 8 },
						mb: { xs: 8, md: 0 },
						height: { xs: "54px", md: "44px" },
						borderRadius: "8px",
						fontSize: "15px",
						position: "relative",
						zIndex: 20,
						width: "min(80%,397px)",
					}}
					variant="contained"
				>
					Join
				</Button>
				{/* Water below md screen */}
				<RepeatElement times={3}>
					<Box
						sx={{
							display: { xs: "block", md: "none" },
							position: "absolute",
							top: -30,
							left: { xs: -750, md: -650 },
							zIndex: 10,
							transform: "rotate(-2deg)",
							transformOrigin: "0 100%",
						}}
					>
						<img src="/water.png" alt="Water" />
					</Box>
				</RepeatElement>
			</Stack>
			{/* MushroomMan */}
			<Box
				sx={{
					position: "relative",
					alignSelf: "flex-end",
					top: { xs: 0, md: "100px" },
					left: { xs: 0, md: "40px" },
					width: { md: "50%", lg: "686px", xs: "75%" },
					flexShrink: 0,
				}}
			>
				<img
					style={{
						position: "relative",
						width: "100%",
						transformOrigin: "50% 100%",
					}}
					src="/mushroom man.png"
					alt=""
				/>
			</Box>
		</Stack>
	);
}

function Sunset() {
	return (
		<Box className="Sunset">
			{/* whote sunset */}
			<Box sx={{ maxWidth: "100%", position: "relative", zIndex: 2 }}>
				<Box style={{ width: "100%", position: "absolute", top: 0, left: 0 }}>
					{/* placeholder image */}
					<img
						// style={{ visibility: "hidden" }}
						style={{ maxWidth: "100%" }}
						src="/sunset.png"
						alt="visual illustration"
					/>
					{/* <img
						style={{
							position: "absolute",
							bottom: 0,
							zIndex: 100,
							width: "100%",
							height: "300px",
						}}
						src="/sunset.png"
						alt="visual illustration"
					/> */}
					<Video />
				</Box>
				{/* sunset cover */}
				<img
					style={{
						width: "100%",
						display: "block",
						margin: "auto",
						position: "relative",
						zIndex: 113,
					}}
					src="/sunset cover.png"
					alt="visual illustration"
				/>
			</Box>
		</Box>
	);
}

function Video() {
	return (
		<video
			style={{
				// visibility: "hidden",
				// width: "70%",
				maxWidth: "100%",
				width: "100%",
				position: "absolute",
				top: 0,
				left: "50%",
				transform: "translateX(-50%)",
			}}
			muted
			autoPlay
			loop
			src="/join-video.mp4"
		></video>
	);
}

function GroundAndWater() {
	return (
		<Box
			sx={{
				width: "100%",
				position: "relative",
			}}
		>
			{/* Ground */}
			<Box
				className="ground-container"
				sx={{ position: "relative", width: "100%" }}
			>
				<img style={{ width: "100%" }} src="/ground.png" alt="Ground" />
				{/* Linear gradient at bottom */}
				<Box
					sx={{
						height: "100px",
						position: "absolute",
						bottom: 0,
						width: "100%",
						display: { xs: "block", md: "none" },
						background: "linear-gradient(0deg, #070e11, rgba(255, 0, 0, 0))",
					}}
				></Box>
			</Box>
			{/* Water */}
			{/* Repeat to increase visibility */}
			<RepeatElement times={3}>
				<Box
					sx={{
						display: { md: "block", xs: "none" },
						position: "absolute",
						top: { xs: 650, md: 130, lg: 155 },
						// bottom: { xs: "0", md: "intital" },
						left: { xs: -750, md: -650 },
						zIndex: 10,
						transform: "rotate(-2deg)",
						transformOrigin: "0 100%",
					}}
				>
					<img src="/water.png" alt="Water" />
				</Box>
			</RepeatElement>
			{/* {Bush} */}
			<Box
				sx={{
					position: "absolute",
					top: { xs: "-345px", md: "intial" },
					left: { md: 0, sm: -150, xs: -300 },
					transform: "translateX(-50%) rotate(10deg)",
				}}
			>
				<img src="/water bush.png" alt="Bush" />
			</Box>
		</Box>
	);
}
