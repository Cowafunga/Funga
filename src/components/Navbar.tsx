import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { INNER_WIDTH } from "../constants";

export default function Navbar() {
	return (
		<Stack
			sx={{
				alignSelf: "start",
				position: "static",
				top: 0,
				py: 2,
				mx: "auto",
				width: `min(${INNER_WIDTH}px, 100%)`,
				zIndex: 10,
			}}
			justifyContent={"space-between"}
			direction="row"
		>
			<a href="#">
				<img src="/logo.png" alt="" />
			</a>
			<Stack gap={3} direction="row" alignItems={"center"}>
				<img src="/twitter.png" alt="" />
				<img src="/discord.png" alt="" />
				<Button
					variant="contained"
					startIcon={<img alt="" src="/wallet.png" />}
				>
					Connect Wallet
				</Button>
			</Stack>
		</Stack>
	);
}
