import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
	interface ThemeOptions {
		custom: any;
	}
	interface Theme {
		custom: any;
	}
}

const theme = createTheme({
	palette: {
		secondary: {
			main: "#FAD275",
			dark: "#583C0D",
		},
		primary: {
			main: "#65B875",
			contrastText: "white",
		},
		info: {
			main: "#3AA2CF",
			contrastText: "white",
		},
	},
	custom: {
		pink: {
			main: "#F2CECE",
		},
		purple: {
			main: "#613572",
			dark: "#4b2958",
		},
		yellow: {
			main: "#FAD275",
		},
	},
});

export default theme;
