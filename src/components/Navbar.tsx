import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { INNER_WIDTH } from "../constants";
import { Box } from "@mui/material";

export default function Navbar() {
	return (
		<Stack
			sx={{
				alignSelf: "start",
				position: "static",
				top: 0,
				boxSizing: "border-box",
				py: 2,
				px: { sm: 3, xs: 1 },
				mx: "auto",
				width: `min(${INNER_WIDTH}px, 100%)`,
				zIndex: 10,
				gap: 1,
				// "&>*": {
				// 	mx: "auto",
				// },
			}}
			alignItems="center"
			flexDirection={{ xs: "column", "300": "row !important" } as any}
			justifyContent={{ xs: "space-evenly", vsm: "space-between !Important" }}
			direction="row"
		>
			<a href="/#">
				<Box
					sx={{
						display: "grid",
						placeItems: "center",
						width: { xs: "75px", sm: "auto" },
					}}
				>
					<img style={{ maxWidth: "100%" }} src="/images/logo.svg" alt="" />
				</Box>
			</a>
			<Stack gap={3} direction="row" alignItems={"center"}>
				<Box sx={{ display: { xs: "none", sm: "grid" }, placeItems: "center" }}>
					<img src="/images/twitter.svg" alt="" />
				</Box>
				<Box sx={{ display: { xs: "none", sm: "grid" }, placeItems: "center" }}>
					{" "}
					<img src="/images/discord filled.svg" alt="" />
				</Box>
				<Button
					variant="contained"
					startIcon={<img alt="" src="/images/wallet.svg" />}
				>
					Connect Wallet
				</Button>
			</Stack>
		</Stack>
	);
}
