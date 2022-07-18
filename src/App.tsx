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
					<Layout>
						<Box
							sx={{ zIndex: 100, position: "relative" }}
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
						}}
					>
						<MintInfo />
						<JoinDiscord />
						<Roadmap />
						{/* <Box sx={{ height: 300 }}></Box> */}
					</Stack>
				</Stack>
			</ThemeProvider>
		</div>
	);
}

export default App;
