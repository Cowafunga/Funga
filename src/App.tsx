import theme from "contexts/theme";
import { ThemeProvider } from "@mui/material";
import AppRoutes from "components/Routes";
import AppProvider from "contexts/AppContext";

export default function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<AppProvider>
					<AppRoutes />
				</AppProvider>
			</ThemeProvider>
		</div>
	);
}
