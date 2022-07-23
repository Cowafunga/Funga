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
import AppProvider, { useAppData } from "./contexts/AppContext";
import { Provider as StoreProvider } from "react-redux";
import store from "./store";
import ConnectWallet from "./components/dapp/ConnectWallet";

function AppComponent() {
	const [appData] = useAppData();
	return (
		<StoreProvider store={store}>
			<ThemeProvider theme={theme}>
				{appData.isLoading ? (
					<LoadingScreen />
				) : (
					<audio autoPlay loop>
						<source src="/audio/website song.wav" type="audio/wav" />
					</audio>
				)}

				<Stack
					alignItems="center"
					maxWidth="1440px"
					width="min(100%, 1440px)"
					sx={{ mx: "auto", overflow: "hidden", position: "relative" }}
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
							zIndex: 99999,
							background: "#07111A",
							width: "min(100%, 1440px)",
							maxWidth: "100%",
							overflow: "visible",
						}}
					>
						<MintInfo />
						<JoinDiscord />
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

					{/* Footer */}
					<Box
						sx={{
							py: 0,
							mt: { md: -8 },
							zIndex: { xs: 19555, md: 999999 },
							position: "relative",
							height: "100%",
							width: "100%",
							overflow: { xs: "hidden", md: "visible" },
							maxWidth: "1440px",
						}}
					>
						<Box
							sx={{
								visibility: { xs: "hidden", md: "visible" },
								position: "relative",
								zIndex: 99999995,
							}}
						>
							<Footer />
						</Box>
						{/* Footer gradient */}

						<Box
							sx={{
								position: "absolute",
								bottom: "0",
								height: "100%",
								width: "100%",
								transform: { xs: "scale(3.5)", md: "scale(2.2)" },
								zIndex: 999,
								transformOrigin: "center center",
								background: {
									xs: "#07111A",
									md: "linear-gradient(37.7deg, #041018 43.67%, #17120C 78.78%)",
								},
								filter: { xs: "blur(20px)", md: "blur(15px)" },
							}}
						></Box>
					</Box>
					{/* This dublicate footer is just for small screens to sit on top of existing footer which is covered by water, so that the footer does not look like it is covered by water. The zIndex of original footer is not changed due to seam issuie with background  */}
					<Box
						sx={{
							zIndex: 999999,
							position: "absolute",
							bottom: 0,
							left: 0,
							display: { xs: "block", md: "none" },
							width: "100%",
						}}
					>
						<Footer />
					</Box>
				</Stack>
			</ThemeProvider>
		</StoreProvider>
	);
}

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
				left: "50%",
				filter: { xs: "blur(30px)", md: "blur(30px)" },

				background: "linear-gradient(37.7deg, #041018 43.67%, #17120C 78.78%)",
				position: "absolute",
				transform: "translateX(-50%) translateY(35%)",
				bottom: 0,
				zIndex: 20,
			}}
		></Box>
	);
}
export default function App() {
	return (
		<div className="App">
			<Box
				sx={{
					py: 10,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<ConnectWallet />
			</Box>
			{/* <AppProvider>
				<AppComponent></AppComponent>
			</AppProvider> */}
		</div>
	);
}
