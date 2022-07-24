import theme from "contexts/theme";
import { ThemeProvider } from "@mui/material";
import AppRoutes from "components/Routes";

export default function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<AppRoutes />
			</ThemeProvider>
		</div>
	);
}
