import React from "react";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import theme from "./contexts/theme";
import { Box, Stack, ThemeProvider } from "@mui/material";
import Hero from "./components/home/Hero";
import MintInfo from "./components/home/MintInfo";
import JoinDiscord from "./components/home/JoinDiscord";
import LoadingScreen from "./components/LoadingScreen";
// import Roadmap from "./components/Roadmap";

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<LoadingScreen />

				<Stack
					alignItems="center"
					maxWidth="1440px"
					sx={{ mx: "auto", overflow: "hidden" }}
				>
					<Layout sx={{ mx: "auto" }}>
						<Box
							sx={{ mx: "auto", zIndex: 100, position: "relative" }}
							marginBottom="-100%"
						>
							<Navbar />
						</Box>
					</Layout>
					<Hero />
					<Stack
						alignItems="center"
						sx={{
							background: "#070e11",
							width: "min(100vw, 1440px)",
							overflow: "visible",
						}}
					>
						{/* <Box sx={{ position: "relative" }}> */}
						<MintInfo />

						<JoinDiscord />
						{/* </Box> */}
						{/* <Roadmap /> */}
						{/* <Box sx={{ height: 300 }}></Box> */}
						{/* <Box
							sx={{
								// mt: "-100px",
								zIndex: 50,
								position: "relative",
								alignSelf: "stretch",
								// boxShadow: "0 0 100px 10px black",
								// background: "white",
							}}
						></Box> */}
					</Stack>
					<Box
						sx={{
							zIndex: 9999,
							width: "100%",
							height: "1px",
							position: "relative",
							top: 40,
						}}
					>
						<LinearGradientInTheBottom />
					</Box>
					<Box
						sx={{
							py: 10,
							pb: 4,
							mt: -8,
							zIndex: 155,
							position: "relative",
							height: "100%",
							width: "100%",
							maxWidth: "1440px",
							background:
								"linear-gradient(180deg, rgba(23,18,12,0.6811099439775911) 0%, rgba(23,18,12,1) 29%, rgba(23,18,12,1) 100%)",
						}}
					>
						<Box>
							<a
								style={{
									position: "absolute",
									top: "43%",
									left: "45%",
									transform: "traslateX(-50%) translateY(-20%)",
									color: "white",
								}}
								href="/#"
							>
								Privacy & Terms
							</a>
						</Box>
						<Navbar />
						<p
							style={{
								// position: "absolute",
								bottom: 0,
								color: "white",
								opacity: 0.6,
								left: "50%",
								textAlign: "center",
								// transform: "translateX(-50%)",
							}}
						>
							{" "}
							Funga™️ 2022. All rights reserved
						</p>
					</Box>
				</Stack>
			</ThemeProvider>
		</div>
	);
}

export default App;

function LinearGradientInTheBottom() {
	return (
		<Box
			sx={{
				width: "100vw",
				height: "170px",
				left: 0,
				// visibility: "hidden",
				background: "linear-gradient(0deg, #17120c, #24251954)",
				position: "absolute",
				bottom: 0,
				zIndex: 20,
			}}
		></Box>
	);
}
