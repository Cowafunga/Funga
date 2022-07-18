import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import appendDublicate from "../utils/appendDublicate";

export default function JoinDiscord() {
	const { custom } = useTheme() as any;
	const { palette } = useTheme();
	return (
		<Stack alignSelf="stretch" sx={{ my: 15, position: "relative" }}>
			<Box
				alignSelf="center"
				sx={(theme) => ({
					img: {
						display: "block",
						border: "15px solid green",
						borderColor: theme.palette.primary.main,
						borderRadius: "15px",
						width: "min(100vw, 970px)",
						boxSizing: "border-box",
						height: "588px",
					},
				})}
			>
				<img src="/joindiscord.jpg" alt="" />
			</Box>
			<Box
				sx={{
					position: "absolute",
					right: 0,
					bottom: 0,
					transform: "translateY(50%)",
				}}
			>
				<img src="/broom-man.png" alt="" />
			</Box>
			<Stack
				sx={{ bottom: 0, transform: "translateX(25%)", position: "absolute" }}
				alignItems="stretch"
			>
				<Typography
					sx={{
						fontFamily: "Geska Rolling",
						textShadow: appendDublicate({
							text: `0 0 14px ${custom.pink.main}`,
							times: 10,
						}),
					}}
					color={custom.purple.main}
					variant="h1"
				>
					Join our
				</Typography>
				<Typography
					sx={{
						fontFamily: "Geska Rolling",
						textShadow: appendDublicate({
							text: `0 0 14px ${custom.pink.main}`,
							times: 10,
						}),
					}}
					color={custom.purple.main}
					variant="h1"
				>
					Discord
				</Typography>
				<Button
					size="large"
					sx={{
						mt: 4,
						background: custom.purple.main,
						border: "5px solid",
						borderColor: custom.pink.main,
						":hover": {
							background: custom.purple.dark,
						},
					}}
					variant="contained"
				>
					Join
				</Button>
			</Stack>
		</Stack>
	);
}
