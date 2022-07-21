import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
	interface ThemeOptions {
		custom: any;
	}
	interface Theme {
		custom: any;
	}
	interface BreakpointOverrides {
		xs: true;
		vsm: true;
		"200": true;
		"300": true;
		"350": true;
		"400": true;
		"500": true;
		"550": true;
		sm: true;
		"700": true;
		md: true;
		lg: true;
		xl: true;
	}
}

const theme = createTheme({
	palette: {
		secondary: {
			main: "#FAD275",
			dark: "#d49528",
			// contrastText: "white",
		},
		primary: {
			main: "#65B875",
			contrastText: "white",
		},
		info: {
			main: "#3AA2CF",
			contrastText: "white",
		},
		success: {
			main: "#5FBFA2",
			contrastText: "white",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: "8px",
				},
			},
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			vsm: 300,
			"200": 200,
			"300": 300,
			"350": 350,
			"400": 400,
			"500": 500,
			"550": 550,
			sm: 600,
			"700": 700,
			md: 900,
			lg: 1200,
			xl: 1536,
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
