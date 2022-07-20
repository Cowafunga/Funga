import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

let assets = [
	{
		name: "Eating video",
		url: "/hero-video.mp4",
	},
	{
		name: "Funga Text",
		url: "/funga text.png",
	},
	{
		name: "Join Discord Text",
		url: "/join discord text.png",
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
	const [progress, setProgress] = useState(() =>
		assets.map((asset) => ({ ...asset, progress: 0 }))
	);
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
					if (totalLength !== null) {
						// setProgress(Math.round((progressEvent.loaded * 100) / totalLength));
						setProgress((currentProgress) => {
							return currentProgress.map((file) => {
								if (asset.url === file.url) {
									return {
										...file,
										progress: Math.round(
											(progressEvent.loaded * 100) / totalLength
										),
									};
								} else {
									return file;
								}
							});
						});
					}
				},
			});
		});
	}, []);
	if (getTotalProgress() === 100) {
		document.body.style.overflow = "initial";
		return <></>;
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
				background: "white",
				zIndex: 10000,
				transform: "translateX(0)",
				height: window.innerHeight,
				width: window.innerWidth,
				fontSize: "50px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				gap: "30px",
			}}
		>
			<Box>Creating your experience {Math.floor(getTotalProgress())}%</Box>
			<Box sx={{ width: "200px", height: "30px", border: "2px solid black" }}>
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
			</Box>
		</Box>
	);
}
