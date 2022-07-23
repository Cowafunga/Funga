import { Box, Button, Stack, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { DISCORD_LINK } from "../../constants";
import RepeatElement from "./../RepeatElement";

const GroundContext =
	React.createContext<React.RefObject<HTMLImageElement> | null>(null);

function useGround() {
	return React.useContext(GroundContext);
}

export default function JoinDiscord() {
	const groundRef = useRef<HTMLImageElement>(null);
	return (
		<GroundContext.Provider value={groundRef}>
			<Stack
				alignSelf="stretch"
				sx={{
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
		</GroundContext.Provider>
	);
}

function BelowSunset() {
	const groundRef = useGround();
	const containerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!groundRef) return;

		const ground = groundRef.current as HTMLImageElement;
		const container = containerRef.current as HTMLDivElement;

		function handler() {
			container.style.marginTop = `-${ground.offsetHeight / 3}px`;
		}
		window.addEventListener("resize", handler);
		handler();
		ground.addEventListener("load", handler);
		return () => {
			window.removeEventListener("resize", handler);
		};
	}, [groundRef]);
	return (
		<Box
			ref={containerRef}
			sx={{
				py: 0.1,
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
	const groundRef = useGround();
	const contentRef = useRef<HTMLDivElement>(null);
	const watersRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!groundRef) return;

		const ground = groundRef.current as HTMLImageElement;

		const content = contentRef.current as HTMLDivElement;

		function resizeHandler() {
			if (window.innerWidth > 900) {
				content.style.bottom = `${ground.offsetHeight * 0.5}px`;
				content.style.marginTop = -0 + "px";
			} else {
				content.style.marginTop = -(ground.offsetHeight * 1.3) + "px";
				content.style.bottom = `${0}px`;
			}
		}
		resizeHandler();
		if (ground) {
			ground.addEventListener("load", resizeHandler);
		}

		window.addEventListener("resize", resizeHandler);
		return () => {
			window.removeEventListener("reisze", resizeHandler);
		};
	}, [groundRef]);

	useEffect(() => {
		// for md and below screen
		if (!groundRef) return;
		const ground = groundRef.current as HTMLImageElement;
		const watersContainer = watersRef.current as HTMLDivElement;

		const waters = Array.from(
			watersContainer.querySelectorAll(".join-discord-water")
		) as HTMLDivElement[];

		function handler() {
			if (window.innerWidth > 900) return;
			const groundWidth = ground.offsetHeight;
			waters.forEach((water) => {
				water.style.top = +groundWidth * 0.5 + "px";
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
	}, [groundRef]);
	return (
		<Stack
			ref={contentRef}
			sx={{
				width: "100%",
				justifyContent: "center",
				position: { xs: "relative", md: "absolute" },
				bottom: { xs: 0, md: 250 },
				zIndex: 30,
				gap: { xs: "50px", md: "0" },
			}}
			direction={{ xs: "column-reverse", md: "row" }}
			alignItems={{ xs: "center", md: "flex-end" }}
		>
			<Stack
				sx={{
					position: "relative",

					[bp.between("xs", "md")]: {
						top: 0,
					},

					[bp.between("xs", "sm")]: {
						width: "65%",
					},
					[bp.between("sm", "700")]: {
						width: "55%",
					},

					[bp.between(700, 800)]: {
						width: "50%",
					},
					[bp.between(800, "md")]: {
						width: "44%",
					},
					[bp.up("md")]: {
						width: "43%",
						top: "80px",
					},
					justifyContent: "start",
					px: { md: 8, lg: 12 }, //6 to match design
					boxSizing: "border-box",
					bottom: 0,
				}}
				alignItems={{ xs: "center" }}
			>
				<img
					src="/images/join discord text.png"
					style={{ width: "100%", position: "relative", zIndex: 20 }}
					alt=""
				/>
				<a
					style={{ width: "100%", textDecoration: "none" }}
					href={DISCORD_LINK}
				>
					<Button
						size="large"
						color="info"
						startIcon={<img src="/images/discord.svg" alt="Discord" />}
						sx={{
							// mt: { xs: 3, "200": 3, "400": 5, sm: 5 },
							mt: { xs: "30px", md: "44px" },
							mb: { xs: 9, md: 0 },
							height: { xs: "30px", md: "44px" },
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
				</a>
				{/* Water below md screen */}
				<Box
					sx={{
						top: { xs: "-180%", "400": "-160%" },
						position: "absolute",
						height: 0,
						width: "100%",
					}}
					ref={watersRef}
				>
					<RepeatElement times={3}>
						<Box
							className="join-discord-water"
							sx={{
								display: { xs: "block", md: "none" },
								position: "absolute",

								left: { xs: -950, md: -650 },
								zIndex: 10,
								transform: { xs: "rotate(13deg)", md: "rotate(-2deg)" },
								transformOrigin: "0 100%",
							}}
						>
							<img src="/images/water.png" alt="Water" />
						</Box>
					</RepeatElement>
				</Box>
			</Stack>
			{/* MushroomMan */}
			<Box
				sx={{
					position: "relative",
					alignSelf: "flex-end",
					top: { xs: "0px", md: "140px", lg: "240px" },
					// transform: "scale(1.2)",
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
					src="/images/mushroom man.png"
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
						style={{ maxWidth: "100%" }}
						src="/sunset.png"
						alt="visual illustration"
					/>

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
					src="/images/sunset cover.png"
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
				maxWidth: "100%",
				width: "100%",
				position: "absolute",
				top: 0,
				left: "50%",
				transform: "translateX(-50%)",
			}}
			muted
			playsInline
			autoPlay
			loop
			src="/videos/join-video.mp4"
		></video>
	);
}

function GroundAndWater() {
	const groundRef = useGround();
	return (
		<Box
			sx={{
				width: "100%",
				position: "relative",
			}}
		>
			{/* Ground */}
			<Box sx={{ height: { md: "auto" }, position: "relative", width: "100%" }}>
				<img
					ref={groundRef}
					style={{ width: "100%" }}
					src="/images/ground.png"
					alt="Ground"
				/>
				{/* Linear gradient at bottom */}
				<Box
					sx={{
						height: "100px",
						position: "absolute",
						bottom: 0,
						width: "100%",
						display: { xs: "block", md: "none" },
						background: "linear-gradient(0deg, #070e11, rgba(0, 0, 0, 0))",
					}}
				></Box>
				{/* {Bush} */}
				<Box
					className="bush"
					sx={{
						position: "absolute",
						zIndex: 10,
						top: 0,

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

						zIndex: 10,
						width: "105%",
						transform: "rotate(-8deg) translateX(-35%) translateY(15%)",
						transformOrigin: "0 100%",
					}}
				>
					<img style={{ width: "100%" }} src="/images/water.png" alt="Water" />
				</Box>
			</RepeatElement>
		</Box>
	);
}
