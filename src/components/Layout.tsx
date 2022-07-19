import { Box, SxProps } from "@mui/material";
import React, { ReactElement } from "react";

interface ILayout {
	children: ReactElement[] | ReactElement;
	sx?: SxProps;
}

export default function Layout({ children, sx = {} }: ILayout) {
	return (
		<Box
			sx={{ boxSizing: "border-box", position: "relative", px: 3, ...sx }}
			width={"min(100%, 1440px)"}
			margin="auto"
		>
			{children}
		</Box>
	);
}
