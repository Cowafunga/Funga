import { Box, Typography, useTheme } from "@mui/material";
import assets from "data/assets";
import React, { useEffect, useRef } from "react";

export default function Hero() {
	return (
		<Box>
			<TopPart />
			<BottomPart />
		</Box>
	);
}

function TopPart() {
	const { breakpoints: bp } = useTheme();
	const { palette } = useTheme();
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
				overflow: "visible",
				zIndex: 9,
				[bp.between("xs", "vsm")]: {
					height: 644 / 2.7,
					pt: 18,
				},
				[bp.between("vsm", "sm")]: {
					height: 644 / 1.95,
					pt: 12,
				},
				[bp.between("sm", "md")]: {
					height: 644 / 1.9,
					pt: 15,
				},
				[bp.between("md", "lg")]: {
					height: 644 / 1.3,
					pt: 15,
				},
				[bp.up("lg")]: {
					height: 644,
					pt: 0,
				},
			}}
		>
			{/* Main Text */}
			<Box
				sx={{
					position: "relative",
					zIndex: 10,
					"*": { fontFamily: "Geska Rolling !important" },
					color: palette.secondary.main,
				}}
				textAlign={"center"}
			>
				<img
					style={{ width: "min(66%, 400px)" }}
					src={assets.fungaAndFriendsTxt}
					alt=""
				/>
			</Box>

			{/* Sub text */}
			<Typography
				color="secondary.main"
				sx={{
					mt: "40px",
					maxWidth: "650px",
					position: "relative",
					zIndex: 10,
					fontSize: { xs: "16px", sm: "18px" },
					px: 3,
				}}
				textAlign="center"
			>
				Funga and Friends host parties at their virtual music festival venue,
				The Festiverse<sup style={{ fontSize: "10px" }}>TM</sup>, and steward a
				music-focused lifestyle brand, LivingThings
				<sup style={{ fontSize: "10px" }}>TM</sup>.
			</Typography>
			<TopGradient transform="translateX(-50%) translateZ(10px)" />
			<TopGradient transform="translateX(-50%)" />
		</Box>
	);
}

function TopGradient({ transform = "" }) {
	const gradientRef = useRef<HTMLDivElement>(null);
	const { breakpoints: bp } = useTheme();

	return (
		<Box
			ref={gradientRef}
			sx={{
				position: "absolute",
				top: -50,
				left: "50%",

				width: "min(140%,2050.93px)",
				[bp.between("xs", "vsm")]: {
					height: "134.7%",
					filter: "blur(20px) ",
				},
				[bp.between("vsm", "400")]: {
					height: "129%",
					filter: "blur(28.5px)",
				},
				[bp.between("400", "sm")]: {
					height: "125.5%",
					filter: "blur(20px)",
				},
				[bp.between("sm", "md")]: {
					height: "120%",
				},
				[bp.between("md", "lg")]: {
					height: "115%",
				},
				[bp.up("xs")]: {
					filter: "blur(35.827px)",
					transform,
				},
				[bp.up("sm")]: {
					filter: "blur(35.827px)",
				},
				[bp.up("lg")]: {
					height: "103%",
				},
				overflow: "visible",
				background: `linear-gradient(33.27deg, #754F64 28.97%, #320A62 75.98%);`,
			}}
		></Box>
	);
}

function BottomPart() {
	// maybe redundant
	const videoRef = useRef<HTMLVideoElement>(null);
	useEffect(() => {
		let video = videoRef.current as HTMLVideoElement;
		video.play();
	}, []);

	return (
		<Box
			sx={{
				mt: { xs: "20px", vsm: "20px", sm: "-45px", lg: "-130px" },
				height: { xs: 380, sm: 510, md: 650, lg: 810 },
				zIndex: 4,
				display: "flex",
				justifyContent: "center",
				position: "relative",
				width: "min(1440px, 100vw)",
			}}
		>
			<video
				ref={videoRef}
				style={{
					width: "100%",
					objectFit: "cover",
				}}
				muted
				loop
				playsInline
				autoPlay
				src={assets.heroVid}
			></video>
			{/* Make sky more purple */}
			<Box
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					height: "100%",
					width: "100%",
					background: `linear-gradient(359deg, rgba(0, 0, 0, 0) 59.4%, #492262 100%)`,
				}}
			></Box>
			<LinearGradientInTheBottom />
		</Box>
	);
}

function LinearGradientInTheBottom() {
	return (
		<Box
			sx={{
				width: "100vw",
				height: "100%",
				left: 0,
				position: "absolute",
				background:
					"linear-gradient(180deg, rgba(0, 0, 0, 0) 79.4%, #07111A 100%)",
				bottom: 0,
				zIndex: 20,
			}}
		></Box>
	);
}
