import theme from "contexts/theme";
import { Box, ThemeProvider, useTheme } from "@mui/material";
import AppRoutes from "Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import MintProvider from "contexts/MintContext";

export default function App() {
	const { palette } = useTheme();
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<MintProvider>
					<AppRoutes />
				</MintProvider>
				<Box
					sx={{
						"& .Toastify__toast ": {
							background: palette.info.main,
							color: palette.info.contrastText,
						},
						"button, svg, svg *": {
							fill: palette.info.contrastText + " !important",
							stroke: palette.info.contrastText + " !important",
							opacity: 1 + " !important",
							":hover": {
								opacity: 0.7 + " !important",
							},
						},
					}}
				>
					<ToastContainer
						position="top-center"
						autoClose={5000}
						// hideProgressBar
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
				</Box>
			</ThemeProvider>
		</div>
	);
}
