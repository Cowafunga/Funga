import { useTheme } from "@emotion/react";
import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

let assets = [
	{
		name: "Eating video",
		url: "/hero-video.mp4",
	},
	{
		name: "Website song",
		url: "/audio/website song.wav",
	},
	{
		name: "Funga Flip",
		url: "/videos/Funga Flip.mp4",
	},
	{
		name: "Funga Text",
		url: "/funga text.png",
	},
	{
		name: "Join Discord Text",
		url: "/images/join discord text.png",
	},
	{
		name: "Mint Info Text",
		url: "/mint info text.png",
	},
	{
		name: "Arrow down",
		url: "/arrow-down.png",
	},

	{
		name: "Watching sunset",
		url: "/join-video.mp4",
	},
	{
		name: "Discord simple",
		url: "/discord-simple.png",
	},
	{
		name: "Discord",
		url: "/discord.png",
	},
	{
		name: "Grass back",
		url: "/grass back.png",
	},
	{
		name: "Grass front",
		url: "/grass front.png",
	},
	{
		name: "Ground",
		url: "/ground.png",
	},
	{
		name: "Mint info",
		url: "/mintinfo4.png",
	},
	{
		name: "Mushroom man",
		url: "/mushroom man.png",
	},
	{
		name: "Mushroom",
		url: "/mushroom2.png",
	},
	{
		name: "Star",
		url: "/star.png",
	},
	{
		name: "Sunset cover",
		url: "/sunset cover.png",
	},
	{
		name: "Twitter",
		url: "/twitter.png",
	},
	{
		name: "Twitter",
		url: "/twitter.png",
	},
	{
		name: "Wallet",
		url: "/wallet.png",
	},
	{
		name: "Water bush",
		url: "/water bush.png",
	},
	{
		name: "Water",
		url: "/water.png",
	},
];

export default function LoadingScreen() {
	// const {  } = useTheme();
	const [progress, setProgress] = useState(() =>
		assets.map((asset) => ({ ...asset, progress: 0 }))
	);
	const [show, setShow] = useState(true);
	useEffect(() => {
		document.body.style.overflow = "hidden";

		assets.forEach((asset) => {
			axios.get(asset.url, {
				onDownloadProgress(progressEvent) {
					const totalLength = progressEvent.lengthComputable
						? progressEvent.total
						: progressEvent.target.getResponseHeader("content-length") ||
						  progressEvent.target.getResponseHeader(
								"x-decompressed-content-length"
						  );
					setProgress((currentProgress) => {
						return currentProgress.map((file) => {
							if (asset.url !== file.url) return file;
							if (totalLength === null) return { ...file, progress: 100 };

							let progress = Math.round(
								(progressEvent.loaded * 100) / totalLength
							);

							// load videos only 15% and rest as it plays?
							const videoProgressThreshold = 100;
							const isVideo = /(\.mp4$)|(\.wav$)/.test(file.url);
							if (isVideo && progress > videoProgressThreshold) {
								progress = 100;
							}
							return {
								...file,
								progress,
							};
						});
					});
				},
			});
		});
	}, []);
	// if (getTotalProgress() === 100) {
	// 	document.body.style.overflow = "initial";
	// 	return <></>;
	// }
	if (!show) {
		document.body.style.overflow = "initial";
		return (
			<audio autoPlay>
				<source src="/audio/website song.wav" type="audio/wav" />
			</audio>
		);
	}

	function getTotalProgress() {
		const total = progress.reduce((prev, current) => {
			return prev + current.progress;
		}, 0);
		return total / progress.length;
	}

	return (
		<Box
			sx={{
				position: "sticky",
				top: 0,
				left: 0,
				zIndex: 25000,
				transform: "translateX(0)",
				height: "100vh",
				width: "100vw",
				fontSize: "50px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				// gap: "30px",
				backgroundImage: "url('/images/loading bg.png')",
				backgroundColor: "#5f3b60",
				backgroundPosition: "center center",
				backgroundSize: "cover",
			}}
		>
			{getTotalProgress() !== 100 && (
				<>
					{/* <Box>Creating your experience {Math.floor(getTotalProgress())}%</Box> */}
					<img
						style={{ width: "min(90%,700px)" }}
						src="/images/its loading text.png"
						alt=""
					/>
					<Box
						sx={{
							// aspectRatio: "1/1",
							width: { xs: "100px", sm: "150px" },
							height: { xs: "100px", sm: "150px" },
						}}
					>
						<img
							style={{
								width: "100%",
								height: "100%",
								transform: "scale(1.2)",
								transformOrigin: "center center",
							}}
							src="/images/spinning mushroom.gif"
							alt=""
						/>
					</Box>

					<Typography
						sx={{
							fontSize: { md: "50px", xs: "25px", sm: "40px", lg: "60px" },
						}}
						fontWeight={"bold"}
						color="secondary"
					>
						{Math.floor(getTotalProgress())}%
					</Typography>
				</>
			)}
			{getTotalProgress() === 100 && (
				<Button
					onClick={() => setShow(false)}
					size="large"
					color="secondary"
					variant="contained"
				>
					Enter
				</Button>
			)}

			{/* <Box sx={{ width: "200px", height: "30px", border: "2px solid black" }}>
				<Box
					sx={{
						height: "100%",
						width: `${getTotalProgress()}%`,
						// animationDuration: "150ms",
						transition: "all 0.25s ease-in-out",

						background: "black",
					}}
				>
					{" "}
				</Box>
			</Box> */}
		</Box>
	);
}