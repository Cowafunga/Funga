import Box from "@mui/material/Box";
import React, { ReactElement } from "react";

interface ILayout {
	children: ReactElement[] | ReactElement;
}

export default function Layout({ children }: ILayout) {
	return (
		<Box
			sx={{ boxSizing: "border-box", position: "relative", px: 3 }}
			width={"min(100%, 1440px)"}
			margin="auto"
		>
			{children}
		</Box>
	);
}
