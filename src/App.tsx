import React from "react";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import theme from "./contexts/theme";
import { Box, Stack, ThemeProvider } from "@mui/material";
import Hero from "./components/home/Hero";
import MintInfo from "./components/home/MintInfo";
import JoinDiscord from "./components/home/JoinDiscord";
import LoadingScreen from "./components/LoadingScreen";
import Footer from "./components/Footer";
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
							background: "#07111A",
							width: "min(100%, 1440px)",
							maxWidth: "100%",
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
						className="last-boundary"
						sx={{
							zIndex: 9999,
							width: "100%",
							height: { xs: 0, md: "1px" },
							display: { xs: "none", md: "block" },
							position: "relative",
							top: 40,
						}}
					>
						<LinearGradientInTheBottom />
					</Box>
					{/* Footer gradient */}
					<Box
						sx={{
							py: 0,
							// pb: 4,
							mt: { md: -8 },
							zIndex: 19555,
							position: "relative",
							height: "100%",
							width: "100%",
							maxWidth: "1440px",
							// background: {
							// 	xs: "#070e11",

							// 	md: "linear-gradient(180deg, rgba(23,18,12,0.6811099439775911) 0%, rgba(23,18,12,1) 29%, rgba(23,18,12,1) 100%)",
							// },
						}}
					>
						<Box sx={{ position: "relative", zIndex: 5 }}>
							<Footer />
						</Box>
						<Box
							sx={{
								position: "absolute",
								bottom: "0",
								height: "100%",
								width: "100%",
								transform: "scale(1.2)",
								transformOrigin: "center center",
								background:
									"linear-gradient(37.7deg, #041018 43.67%, #17120C 78.78%)",
								filter: "blur(15px)",
							}}
						></Box>
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
				// width: "100vw",
				// height: { xs: "100px", md: "170px" },
				// height: "313px",
				// width: "2051px",
				aspectRatio: "1/ 0.1526",
				width: "min(142%, 2051px)",
				// left: 0,
				left: "50%",
				filter: "blur(30px)",
				// visibility: "hidden",
				// background: {
				// 	xs: "linear-gradient(0deg, #111e23, #24251954)",
				// 	md: "linear-gradient(0deg, #17120c, #24251954)",
				// },
				background: "linear-gradient(37.7deg, #041018 43.67%, #17120C 78.78%)",
				position: "absolute",
				transform: "translateX(-50%) translateY(35%)",
				bottom: 0,
				zIndex: 20,
			}}
		></Box>
	);
}
