import { Box, Stack, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import appendDublicate from "../../utils/appendDublicate";

export default function Roadmap() {
	const { palette, custom } = useTheme();
	return (
		<Stack alignItems="center" sx={{ my: 35, position: "relative" }}>
			<Typography
				sx={{
					color: palette.secondary.main,
					fontFamily: "Geska Rolling",
					mb: 10,
					textShadow: appendDublicate({
						text: `0 0 24px ${palette.secondary.dark}`,
						times: 20,
					}),
				}}
				variant="h1"
			>
				{" "}
				Roadmap
			</Typography>
			<Grid
				container
				justifyContent="center"
				sx={{
					ml: 10,
					// background: "white",
					width: "800px",
					"&>:nth-of-type(2n-1)": {
						fontSize: 30,
						fontFamily: "Geska Rolling",
						display: "flex",
						// pl: 35,
					},

					"&>*": {
						px: 3,
						my: "25px !Important",
					},
				}}
			>
				<Grid color={custom.pink.main} xs={6} item>
					Fungaflora <br /> Session
				</Grid>
				<Grid xs={6} color="white" item>
					Celebrated musicians become <br /> friends of Funga. AMAs, collabs,
					etc.
				</Grid>
				<Grid color={palette.secondary.main} xs={6} item>
					Fungaflora <br /> Live
				</Grid>
				<Grid xs={6} color="white" item>
					Meet up IRL and party
				</Grid>
				<Grid color={custom.purple.main} xs={6} item>
					Fungaflora <br /> Drip
				</Grid>
				<Grid xs={6} color="white" item>
					Wear what Fungas wear
				</Grid>
				<Grid color={palette.primary.main} xs={6} item>
					The <br /> Festiverse
				</Grid>
				<Grid color={"white"} xs={6} item>
					Virtual live music venue. <br /> Concerts on multiple themed stages.
				</Grid>
			</Grid>
			<Box
				sx={{ position: "absolute", bottom: 0, transform: "translateX(-100%)" }}
			>
				<img
					src="./grass strip.png"
					style={{ height: "500px" }}
					alt="Grass strip"
				/>
				{Array(4)
					.fill(0)
					.map((num, index) => {
						return (
							<img
								key={index}
								style={{
									height: 50,
									position: "absolute",
									left: 0,
									top: `${index * 25 + 5}%`,
									transform: index % 2 === 0 ? "rotate(90deg)" : "",
								}}
								src="Green Numen.png"
								alt="mushrrom"
							/>
						);
					})}
			</Box>
		</Stack>
	);
}
