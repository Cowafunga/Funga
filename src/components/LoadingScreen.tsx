import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import assets from "data/assets";
import React, { useEffect, useState } from "react";
import { useAppData } from "../contexts/AppContext";
import "./LoadingScreen.css";

const formattedAssets = [] as { url: string; name: string }[];

for (let asset in assets) {
	formattedAssets.push({
		name: asset,
		url: assets[asset as keyof typeof assets],
	});
}

export default function LoadingScreen({ playAudio }: { playAudio?(): any }) {
	const [data, setAppData] = useAppData();
	const [progress, setProgress] = useState(() =>
		formattedAssets.map((asset) => ({ ...asset, progress: 0 }))
	);
	const [show, setShow] = useState(true);
	useEffect(() => {
		document.body.style.overflow = "hidden";

		formattedAssets.forEach((asset) => {
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
							const videoProgressThreshold = 30;
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

	useEffect(() => {
		if (!show) {
			document.body.style.overflow = "initial";

			data.isLoading && setAppData((d) => ({ ...d, isLoading: false }));
		}
	}, [show, data.isLoading, setAppData]);

	if (!data.isLoading) {
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
			{getTotalProgress() < 100 && (
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
								// transform: "scale(1.2)",
								transformOrigin: "center center",
							}}
							id="spinning-mushroom"
							src="/images/spinning mushroom.png"
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
			{getTotalProgress() >= 100 && (
				<Button
					onClickCapture={() => {
						setShow(false);
						playAudio && playAudio();
					}}
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
		</Box>
	);
}
