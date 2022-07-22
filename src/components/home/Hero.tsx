import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useAppData } from "../../contexts/AppContext";

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
	return (
		<Box
			sx={{
				pt: { xs: 18, vsm: 12, sm: 15, md: 15, lg: 0 },
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",

				[bp.between("xs", "vsm")]: {
					height: 644 / 2.7,
				},
				[bp.between("vsm", "sm")]: {
					height: 644 / 1.95,
				},
				[bp.between("sm", "md")]: {
					height: 644 / 1.9,
				},
				[bp.between("md", "lg")]: {
					height: 644 / 1.3,
				},
				[bp.up("lg")]: {
					height: 644,
				},

				position: "relative",
				zIndex: 9,
			}}
		>
			<MainText />
			<Typography
				color="secondary.main"
				sx={{
					mt: "40px",
					maxWidth: "650px",
					position: "relative",
					zIndex: 10,
					fontSize: { xs: "16px", sm: "18px" },
					px: 3,
					// fontWeight: "bolder",
				}}
				textAlign="center"
			>
				Funga and Friends host parties at their virtual music festival venue,
				The Festiverse<sup style={{ fontSize: "10px" }}>TM</sup>, and steward a
				music-focused lifestyle brand, LivingThings
				<sup style={{ fontSize: "10px" }}>TM</sup>.
			</Typography>
			<TopGradient />
		</Box>
	);
}

function TopGradient() {
	const gradientRef = useRef<HTMLDivElement>(null);
	const { breakpoints: bp } = useTheme();
	const [data] = useAppData();
	useEffect(() => {
		let box = gradientRef.current as HTMLDivElement;
		// all trouble of using loading because the sky graident in the top secion looks cutoff in iphone safari and this weird code fixes it
		if (!data.isLoading) {
			box.style.width = "0";
			// setTimeout(() => {
			requestAnimationFrame(() => {
				box.style.width = "min(140%,2050.93px)";
			});
			// }, 100);
		}
		setTimeout(() => {
			requestAnimationFrame(() => {
				box.style.width = "min(140%,2050.93px)";
			});
		}, 500);
	}, [data.isLoading]);

	// useEffect(() => {
	// 	function onResize() {
	// 		let elem = gradientRef.current as HTMLDivElement;
	// 		if (window.innerWidth < 1440) {
	// 			let heightDiff = 1440 - window.innerWidth;
	// 			let originalHeight = 103;
	// 			let newHeight = originalHeight + heightDiff * 0.1;
	// 			elem.style.height = `${newHeight}%`;
	// 		}
	// 	}
	// 	// window.addEventListener("resize", onResize);
	// 	return () => {
	// 		window.removeEventListener("resize", onResize);
	// 	};
	// }, []);
	return (
		<Box
			ref={gradientRef}
			sx={{
				position: "absolute",
				top: -50,
				left: "50%",
				transform: "translateX(-50%)",
				width: { xs: "min(140%,2050.93px)" },

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
				[bp.up("lg")]: {
					height: "103%",
				},
				[bp.up("sm")]: {
					filter: "blur(35.827px)",
				},

				background: `linear-gradient(33.27deg, #754F64 28.97%, #320A62 75.98%);`,
			}}
		></Box>
	);
}

function BottomPart() {
	// silly stuff because things somehow don't work in the great iPhone
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
				// background: `linear-gradient(359deg, rgba(0, 0, 0, 0) 59.4%, #492262 100%),url(/hero.png)`,
			}}
		>
			<video
				ref={videoRef}
				style={{ width: "100%", objectFit: "cover" }}
				muted
				loop
				playsInline
				autoPlay
				src="/videos/hero-video.mp4"
			></video>
			<MakeSkyMorePurple />
			<LinearGradientInTheBottom />
		</Box>
	);
}

function MakeSkyMorePurple() {
	return (
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
	);
}

function LinearGradientInTheBottom() {
	return (
		<Box
			sx={{
				width: "100vw",
				// height: { xs: "80px", sm: "150px", lg: "170px" },
				height: "100%",
				left: 0,
				// visibility: "hidden",
				// background: "linear-gradient(0deg, #070e11, #24251954)",
				position: "absolute",
				background:
					"linear-gradient(180deg, rgba(0, 0, 0, 0) 79.4%, #07111A 100%)",
				bottom: 0,
				zIndex: 20,
			}}
		></Box>
	);
}

function MainText() {
	const { palette } = useTheme();

	return (
		<Box
			sx={{
				position: "relative",
				zIndex: 10,
				"*": { fontFamily: "Geska Rolling !important" },
				color: palette.secondary.main,
			}}
			textAlign={"center"}
		>
			<img style={{ width: "min(66%, 400px)" }} src="/funga text.png" alt="" />
			{/* <Typography
				sx={{
					// use multiple shadows to simulate spread effect, otherwise, shadow will be blurry
					fontSize: "102px",
					textShadow: appendDublicate({
						text: `0 0 12px ${palette.secondary.dark}`,
						times: 50,
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
					my: -4.5,
					fontSize: "75px",
					textShadow: appendDublicate({
						text: `0 0 12px ${palette.secondary.dark}`,
						times: 50,
					}),
				}}
				variant="h2"
			>
				and
			</Typography>
			<Typography
				sx={{
					fontSize: "102px",
					textShadow: appendDublicate({
						text: `0 0 12px ${palette.secondary.dark}`,
						times: 50,
					}),
				}}
				variant="h1"
			>
				friends
			</Typography> */}
		</Box>
	);
}
