import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { INNER_WIDTH } from "../constants";
import { Box } from "@mui/material";

export default function Footer() {
	return (
		<Stack>
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
					gap: 3,
					// "&>*": {
					// 	mx: "auto",
					// },
					"&>*": {
						flexBasis: 0,
					},
				}}
				alignItems="center"
				flexDirection={{ xs: "column", "700": "row !important" } as any}
				justifyContent={{ xs: "space-evenly", vsm: "space-between !Important" }}
				direction="row"
			>
				<a href="/#">
					<Box
						sx={{
							display: "grid",
							placeItems: "center",
							width: { xs: "75px", sm: "150px" },
						}}
					>
						<img style={{ maxWidth: "100%" }} src="/images/logo.svg" alt="" />
					</Box>
				</a>
				<Box
					sx={{
						position: { md: "absolute" },
						transform: { md: "translateX(-50%)" },
						left: "50%",
						display: { xs: "none", "700": "flex !important" },
					}}
				>
					<a
						style={{
							width: "max-content",
							color: "white",
						}}
						href="/#"
					>
						Privacy & Terms
					</a>
				</Box>
				<Stack
					alignSelf={{ xs: "stretch", "700": "center !important" }}
					justifyContent={"space-between"}
					gap={3}
					direction={{ xs: "column", "350": "row !important" } as any}
					alignItems={"center"}
				>
					<img src="/images/twitter.svg" alt="" />
					<Button
						variant="contained"
						startIcon={<img alt="" src="/wallet.png" />}
						sx={{ display: { "700": "none !important", xs: "inline-flex" } }}
					>
						Connect Wallet
					</Button>
					<img src="/images/discord filled.svg" alt="" />
					<Button
						variant="contained"
						startIcon={<img alt="" src="/images/wallet.svg" />}
						sx={{
							width: "max-content",
							display: { "700": "inline-flex !important", xs: "none" },
						}}
					>
						Connect Wallet
					</Button>
				</Stack>
				<Box sx={{ display: { "700": "none !important", xs: "block" } }}>
					<a
						style={{
							color: "white",
						}}
						href="/#"
					>
						Privacy & Terms
					</a>
				</Box>
			</Stack>
			<p
				style={{
					color: "white",
					opacity: 0.6,
					left: "50%",
					textAlign: "center",
				}}
			>
				Funga™️ 2022. All rights reserved
			</p>
		</Stack>
	);
}
