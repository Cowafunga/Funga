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
				overflow: "hidden",
				my: 15,
				mb: 0,
				position: "relative",
				zIndex: 25,
			}}
		>
			<Background />
			<Stack alignSelf="center" sx={{ position: "absolute", bottom: -150 }}>
				<Content />
			</Stack>
		</Stack>
	);
}

function Content() {
	const { palette } = useTheme();

	return (
		<Stack
			sx={{
				width: "100%",
				justifyContent: "center",
				position: "relative",
				top: -353,
				zIndex: 30,
			}}
			direction="row"
			alignItems="flex-end"
		>
			<Stack sx={{ bottom: 0, position: "relative" }} alignItems="stretch">
				<img src="/join discord text.png" style={{ width: "467px" }} alt="" />
				{/* <Typography
					sx={{
						fontFamily: "Geska Rolling",
						textShadow: appendDublicate({
							text: `0 0 12px ${"white"}`,
							times: 50,
						}),
						fontSize: "90px",
					}}
					color={palette.info.main}
					variant="h1"
				>
					join our
				</Typography>
				<Typography
					sx={{
						fontFamily: "Geska Rolling",
						textShadow: appendDublicate({
							text: `0 0 14px ${"white"}`,
							times: 50,
						}),
						fontSize: "90px",
					}}
					color={palette.info.main}
					variant="h1"
				>
					Discord
				</Typography> */}
				<Button
					size="large"
					color="info"
					startIcon={<img src="/discord-simple.png" alt="Discord" />}
					sx={{
						mt: 8,
						height: "44px",
						borderRadius: "8px",
						fontSize: "15px",
						// background: custom.purple.main,
						// border: "5px solid",
						// background: palette.info.main,
						// ":hover": {
						// 	background: custom.purple.dark,
						// },
					}}
					variant="contained"
				>
					Join
				</Button>
			</Stack>
			<Box sx={{ position: "relative", top: "100px", left: "120px" }}>
				<img
					style={{
						position: "relative",
						top: "25px",
						// transform: "scale(0.8)",
						transformOrigin: "50% 100%",
					}}
					src="/mushroom man.png"
					alt=""
				/>
			</Box>
		</Stack>
	);
}

function Background() {
	return (
		<Box className="Background">
			{/* whote sunset */}
			<Box sx={{ position: "relative", zIndex: 2 }}>
				<Box style={{ position: "absolute", top: 0, left: 0 }}>
					{/* placeholder image */}
					<img
						// style={{ visibility: "hidden" }}
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
			{/* ground and water */}
			<GroundAndWater />
		</Box>
	);
}

function Video() {
	return (
		<video
			style={{
				// visibility: "hidden",
				// width: "70%",
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
		<Box sx={{ marginTop: "-270px", position: "relative" }}>
			<img src="/ground.png" alt="Ground" />
			<RepeatElement times={3}>
				<img
					style={{
						position: "absolute",
						top: 160,
						left: -450,
						zIndex: 10,
						transform: "rotate(-5deg)",
						transformOrigin: "0 100%",
						// width: 1500,
						// height: 700,
					}}
					src="/water.png"
					alt="Water"
				/>
			</RepeatElement>
			{/* {Bush} */}
			<img
				src="/water bush.png"
				alt="Bush"
				style={{
					position: "absolute",
					left: 0,
					transform: "translateX(-50%) rotate(10deg)",
				}}
			/>
		</Box>
	);
}
