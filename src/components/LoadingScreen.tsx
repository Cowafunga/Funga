import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppData } from "../contexts/AppContext";

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
		name: "Discord Contained",
		url: "/images/discord filled.svg",
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
		url: "/images/twitter.svg",
	},

	{
		name: "Wallet",
		url: "/images/wallet.svg",
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
	const [data, setAppData] = useAppData();
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
	useEffect(() => {
		if (!show) {
			document.body.style.overflow = "initial";

			data.isLoading && setAppData((d) => ({ ...d, isLoading: false }));
		}
	}, [show, data.isLoading, setAppData]);

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
				zIndex: 9999999,
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
								visibility: "hidden",
								width: "100%",
								height: "100%",
								transform: "scale(1.2)",
								transformOrigin: "center center",
							}}
							src="/images/spinning mushroom.gif"
							alt=""
						/>
					</Box>
					<Box
						sx={{
							position: "fixed",
							top: "50%",
							transform: "translateY(-50%)",
							// visibility: "hidden",

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
					sx={{
						fontWeight: "bold",
						// transform: "translateX(-20%) translateY(50%)",
					}}
					color="secondary"
					variant="contained"
				>
					Get Weird
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
