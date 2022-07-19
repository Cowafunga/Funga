import React from "react";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import theme from "./contexts/theme";
import { Box, Stack, ThemeProvider } from "@mui/material";
import Hero from "./components/Hero";
import MintInfo from "./components/MintInfo";
import JoinDiscord from "./components/JoinDiscord";
import Roadmap from "./components/Roadmap";

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Stack alignItems="center">
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
							overflow: "hidden",
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
								href="#"
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
