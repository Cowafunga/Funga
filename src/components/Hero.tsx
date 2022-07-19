import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import appendDublicate from "../utils/appendDublicate";

export default function Hero() {
	return (
		<Box>
			<TopPart />
			<BottomPart />
		</Box>
	);
}

function TopPart() {
	const { palette } = useTheme();

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: 644,
				// overflow: "hidden",
				position: "relative",
				zIndex: 9,
			}}
		>
			<Box
				sx={{
					position: "relative",
					zIndex: 10,
					"*": { fontFamily: "Geska Rolling !important" },
					color: palette.secondary.main,
				}}
				textAlign={"center"}
			>
				<Typography
					sx={{
						// use multiple shadows to simulate spread effect, otherwise, shadow will be blurry
						fontSize: "112px",
						textShadow: appendDublicate({
							text: `0 0 14px ${palette.secondary.dark}`,
							times: 10,
						}),
					}}
					variant="h1"
				>
					funga
				</Typography>

				<Typography
					sx={{
						color: "white",
						position: "relative",
						zIndex: 5,
						my: -6.5,
						fontSize: "82px",
						textShadow: appendDublicate({
							text: `0 0 14px ${palette.secondary.dark}`,
							times: 10,
						}),
					}}
					variant="h2"
				>
					and
				</Typography>
				<Typography
					sx={{
						fontSize: "112px",
						textShadow: appendDublicate({
							text: `0 0 14px ${palette.secondary.dark}`,
							times: 10,
						}),
					}}
					variant="h1"
				>
					friends
				</Typography>
			</Box>
			<Typography
				color="secondary.main"
				sx={{
					mt: "40px",
					maxWidth: "700px",
					position: "relative",
					zIndex: 10,
					fontSize: "18px",
					fontWeight: "bolder",
				}}
				textAlign="center"
			>
				Funga and Friends host parties at their virtual music festival venue,
				The Festiverse™️, and steward a music-focused lifestyle brand,
				LivingThings™️.
			</Typography>

			<Box
				sx={{
					position: "absolute",
					top: -50,
					left: "50%",
					transform: "translateX(-50%)",
					width: "2050.93px",
					height: 644 * 1.03,
					background: `linear-gradient(33.27deg, #754F64 28.97%, #320A62 75.98%, rgba(255, 255, 255, 0) 100%);`,
					overflow: "hidden",
					filter: "blur(45.827px)",
				}}
			></Box>
		</Box>
	);
}

function BottomPart() {
	return (
		<Box
			sx={{
				mt: "-130px",
				height: 810,
				zIndex: 4,
				display: "flex",
				justifyContent: "center",
				position: "relative",
				width: "min(1440px, 100vw)",
				background: "#4b2463",

				// background: "url(/hero.png)",
				// background: `linear-gradient(359deg, rgba(0, 0, 0, 0) 59.4%, #492262 100%),url(/hero.png)`,
			}}
		>
			<video muted loop autoPlay src="/hero-video.mp4"></video>
		</Box>
	);
}
