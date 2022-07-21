import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
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
	const { breakpoints: bp } = useTheme();
	useEffect(() => {
		const ground = document.querySelector(
			".ground-container img"
		) as HTMLImageElement;
		function handler() {
			const ground = document.querySelector(
				".ground-container"
			) as HTMLImageElement;
			const container = document.querySelector(
				".below-sunset"
			) as HTMLDivElement;
			container.style.marginTop = `-${ground.offsetHeight / 3}px`;
		}
		window.addEventListener("resize", handler);
		handler();
		ground.addEventListener("load", handler);
		return () => {
			window.removeEventListener("resize", handler);
		};
	}, []);
	return (
		<Box
			className="below-sunset"
			sx={{
				// [bp.between("xs", "vsm")]: {
				// 	mt: "-50px",
				// },
				// [bp.between("vsm", "sm")]: {
				// 	mt: "-100px",
				// },
				// [bp.between("sm", "md")]: {
				// 	mt: "-100px",
				// },
				// [bp.between("md", "lg")]: {
				// 	mt: "-180px",
				// },
				// [bp.up("lg")]: {
				// 	mt: "-245px",
				// },
				// marginTop: {
				// 	xs: "-50px",
				// 	vsm: "-100px",
				// 	sm: "-140px",
				// 	md: "-180px",
				// 	lg: "-215px",
				// },
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
	const { breakpoints: bp } = useTheme();
	useEffect(() => {
		const ground = document.querySelector(
			".ground-container img"
		) as HTMLImageElement;

		function resizeHandler() {
			const content = document.querySelector(".content") as HTMLDivElement;
			if (window.innerWidth < 900) {
				content.style.marginTop = -(ground.offsetHeight * 1.3) + "px";
			}
		}
		console.log(ground);
		resizeHandler();
		ground.addEventListener("load", resizeHandler);

		window.addEventListener("resize", resizeHandler);
		return () => {
			window.removeEventListener("reisze", resizeHandler);
		};
	}, []);

	useEffect(() => {
		// for md and below screen
		const ground = document.querySelector(
			".ground-container img"
		) as HTMLImageElement;

		const waters = Array.from(
			document.querySelectorAll(".join-discord-water")
		) as HTMLDivElement[];
		function handler() {
			if (window.innerWidth > 900) return;
			const groundWidth = ground.offsetHeight;
			waters.forEach((water) => {
				// water.style.top = -groundWidth * 0.851 + "px";
			});
		}
		ground.addEventListener("load", handler);
		window.addEventListener("resize", handler);
		let firstImg = waters[0] && waters[0].querySelector("img");
		if (firstImg) {
			(firstImg as any).onload = handler;
		}
		handler();
		return () => {
			window.removeEventListener("resize", handler);
		};
	}, []);
	return (
		<Stack
			className="content"
			sx={{
				width: "100%",
				justifyContent: "center",
				// visibility: "hidden",
				position: { xs: "relative", md: "absolute" },
				bottom: { xs: 0, md: 250 },

				// mt: {
				// 	xs: "-190px",
				// 	"300": "-230px !important ",
				// 	"400": "-300px !important",
				// 	"500": "-400px !important",
				// 	"550": "-540px",
				// 	sm: "-470px",
				// 	md: "-470px ",
				// },

				// [bp.between("xs", 300)]: {
				// 	mt: "-190px",
				// },
				// [bp.between(300, 400)]: {
				// 	mt: "-230px",
				// },
				// [bp.between(400, 500)]: {
				// 	mt: "-300px",
				// },
				// [bp.between(500, 550)]: {
				// 	mt: "-400px",
				// },
				// [bp.between(550, "sm")]: {
				// 	mt: "-400px",
				// },
				// [bp.between("sm", 700)]: {
				// 	mt: "-400px",
				// },
				// [bp.between(700, 800)]: {
				// 	mt: "-500px",
				// },
				// [bp.between(800, 900)]: {
				// 	mt: "-550px",
				// },
				// [bp.up(600)]: {
				// 	mt: "-670px",
				// },

				zIndex: 30,
				gap: { xs: "50px", md: "0" },
			}}
			direction={{ xs: "column-reverse", md: "row" }}
			alignItems={{ xs: "center", md: "flex-end" }}
		>
			<Stack
				sx={{
					// mt: { xs: -4 },
					top: { xs: "0%", md: 130 },
					width: {
						xs: "45%", //67% to match design
						md: "43%",
					},
					aspectRatio: "1.4/1",
					px: { md: 13 }, //6 to match design
					boxSizing: "border-box",
					bottom: 0,
					position: "relative",
				}}
				alignItems={{ xs: "center" }}
			>
				<img
					src="/images/join discord text.png"
					style={{ width: "100%", position: "relative", zIndex: 20 }}
					alt=""
				/>

				<Button
					size="large"
					color="info"
					startIcon={<img src="/discord-simple.png" alt="Discord" />}
					sx={{
						mt: { xs: 4, "200": 3, "400": 5, sm: 5 },
						mb: { xs: 0, md: 0 },
						height: { xs: "44px", md: "44px" },
						borderRadius: "8px",
						fontSize: "15px",
						position: "relative",
						zIndex: 20,
						width: "100%",
					}}
					variant="contained"
				>
					Join
				</Button>
				{/* Water below md screen */}
				<Box
					sx={{
						top: { xs: "-180%", "400": "-160%" },
						position: "absolute",
						height: 0,
						width: "100%",
					}}
				>
					<RepeatElement times={2}>
						<Box
							className="join-discord-water"
							sx={{
								display: { xs: "block", md: "none" },
								position: "absolute",
								// top: { xs: "-10%", md: 0 },
								// [bp.between("sm", "700")]: {
								// 	mt: "-300px",
								// },
								// [bp.between("700", "800")]: {
								// 	mt: "-350px",
								// },
								// [bp.between("800", "md")]: {
								// 	mt: "-400px",
								// },
								// [bp.up("md")]: {
								// 	mt: "-470px",
								// },
								left: { xs: -850, md: -650 },
								zIndex: 10,
								transform: { xs: "rotate(13deg)", md: "rotate(-2deg)" },
								transformOrigin: "0 100%",
							}}
						>
							<img src="/water.png" alt="Water" />
						</Box>
					</RepeatElement>
				</Box>
			</Stack>
			{/* MushroomMan */}
			<Box
				sx={{
					position: "relative",
					alignSelf: "flex-end",
					top: { xs: "0px", md: "140px" },
					left: { xs: 0, md: "40px" },
					width: { xs: "70%", md: "47%" },
					flexShrink: 0,
				}}
			>
				<img
					style={{
						position: "relative",
						width: "100%",
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
				sx={{ height: { md: "auto" }, position: "relative", width: "100%" }}
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
				{/* {Bush} */}
				<Box
					className="bush"
					sx={{
						position: "absolute",
						zIndex: 10,
						top: 0,
						// top: { xs: "-355px", md: "intial" },
						// left: { xs: -300, sm: -150, md: 0 },
						width: "71%",
						transform: "translateX(-50%) translateY(-20%) rotate(8deg)",
					}}
				>
					<img
						style={{ width: "100%" }}
						src="/images/ground bush trimmed.png"
						alt="Bush"
					/>
				</Box>
			</Box>
			{/* Water */}
			{/* Repeat to increase visibility */}
			<RepeatElement times={5}>
				<Box
					sx={{
						display: { md: "block", xs: "none" },
						position: "absolute",
						top: 0,
						// bottom: { xs: "0", md: "intital" },
						// left: { xs: -750, md: -650 },
						zIndex: 10,
						width: "105%",
						transform: "rotate(-8deg) translateX(-35%) translateY(15%)",
						transformOrigin: "0 100%",
					}}
				>
					<img style={{ width: "100%" }} src="/water.png" alt="Water" />
				</Box>
			</RepeatElement>
		</Box>
	);
}
