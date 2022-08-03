import {
	Box,
	Button,
	Grid,
	Stack,
	SxProps,
	Typography,
	useTheme,
} from "@mui/material";
import OpenseaIcon from "components/svg/Opensea";
import assets from "data/assets";
import { OPENSEA_COLLECTION } from "data/constants";
import { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

export default function MintInfo() {
	// let navigate = useNavigate();
	return (
		<Stack
			justifyContent="space-between"
			direction="column"
			alignItems="center"
			alignSelf="stretch"
			sx={{ position: "relative", zIndex: 20000 }}
		>
			<Arrow />
			<Grid container sx={{ position: "relative", zIndex: 50, mt: 5 }}>
				<Grid
					sx={{
						display: { xs: "flex", md: "none" },
						justifyContent: "center",
						position: "relative",
						zIndex: 500,
					}}
					item
					xs={12}
					md={6}
				>
					<MintInfoDetails />
				</Grid>

				<Grid
					item
					sx={{
						mt: { xs: "45px", md: 0 },
						display: "flex",
						justifyContent: "center",
					}}
					xs={12}
					md={6}
				>
					<Frame />
				</Grid>

				<Grid
					sx={{
						display: { xs: "none", md: "flex" },
						justifyContent: "center",
						position: "relative",
						zIndex: 500,
					}}
					item
					xs={12}
					md={6}
				>
					<MintInfoDetails />
				</Grid>
				<Grid sx={{ position: "relative" }} xs={12} item>
					<GrassHorizontal />
					<a href={OPENSEA_COLLECTION}>
						<Button
							sx={{
								mx: "auto",
								fontSize: "17px",
								width: "min(95%, 245px)",
								zIndex: 900,
								left: "50%",
								bottom: "10%",
								// top: "100%",
								transform: "translateX(-50%) translateY(-50%)",
								position: "absolute",
								height: "45px",
								display: { md: "none", xs: "flex" },
							}}
							// startIcon={<img src={assets.wallet} alt="Medical kit" />}
							startIcon={<OpenseaIcon />}
							variant="contained"
						>
							BUY ON OPENSEA
						</Button>
					</a>
				</Grid>
			</Grid>
			<Grass sx={{ display: { xs: "none", md: "block" } }} />
		</Stack>
	);
}

function Frame() {
	const { palette } = useTheme();
	return (
		<Box
			sx={{
				display: "grid",
				placeItems: "center",
				position: "relative",
			}}
		>
			<Box
				sx={{
					width: "min(75%, 370px)",
					aspectRatio: "1/1",
					display: "grid",
					placeItems: "center",
					position: "relative",
				}}
			>
				<img
					src={assets.fungaFlipGif}
					style={{
						borderRadius: "10px",
						width: "100%",
						position: "relative",
						zIndex: 15,
					}}
					alt="Funga flip"
				/>

				{/* Mushrooms */}

				<Box
					sx={{
						zIndex: 15,
						position: "absolute",
						bottom: "-25%",
						left: "80%",
					}}
				>
					<img
						style={{ width: 250, height: 250, transform: "rotate(80deg)" }}
						src={assets.greenMushroom}
						alt=""
					/>

					<img
						style={{ position: "absolute", bottom: 25, left: -25 }}
						src={assets.whiteMushroom}
						alt=""
					/>
				</Box>
			</Box>

			<Star />

			{/* Shadow */}
			<Box
				className="Green shadow"
				id="green"
				sx={{
					position: "absolute",
					width: "0%",
					height: "0%",
					top: "20%",
					zIndex: 5,
					opacity: { md: 1, xs: 0.65 },
					left: { xs: "50%", md: "62%" },
					borderRadius: "100%",
					boxShadow: `0px 0px 300px 155px ${palette.primary.main}`,
				}}
			></Box>
			<Grass
				sx={{
					zIndex: 2,
					top: "-100%",
					img: { width: "100%" },
					display: { md: "none", xs: "block" },
				}}
			/>
		</Box>
	);
}

function Star() {
	return (
		<Box
			sx={{
				top: "50%",
				left: { xs: "50%", ms: "25%" },
				zIndex: 10,
				transform: "translate(-50%, -50%)",
				position: "absolute",
			}}
		>
			<img style={{ width: 1805, height: 984 }} src={assets.star} alt="Star" />
		</Box>
	);
}

function MintInfoDetails() {
	const { palette } = useTheme();
	// let navigate = useNavigate();

	return (
		<Stack
			justifyContent="space-between"
			sx={{
				gap: { md: 0, xs: 4 },
				alignSelf: "stretch",
				position: "relative",
				zIndex: 500,
			}}
			alignItems="center"
		>
			<img src={assets.mintInfoText} style={{ width: "68%" }} alt="" />

			<Grid
				sx={{
					width: { xs: "min-content", md: "auto" },
					transform: { md: "translateX(8%)", lg: "translateX(10%)" },
				}}
				justifyContent="center"
				container
			>
				{[
					{
						text: "Free mint",
						icon: <img src={assets.freeMintWallet} alt="wallet" />,
					},
					{
						text: "July 30, 2022",
						icon: <img src={assets.clock} alt="Clock" />,
					},

					{
						text: "Team is keeping 100",
						icon: <img src={assets.people} alt="People" />,
					},
					{
						text: "3,333 Fungas",
						icon: <img src={assets.globe} alt="Globe" />,
					},
				].map((item) => {
					return (
						<Grid
							item
							sx={{
								minWidth: 0,
								width: { xs: "max-content", md: "auto" },
								display: "flex",
								my: 1.4,
							}}
							key={item.text}
							xs={12}
							md={6}
						>
							<Stack
								sx={{
									display: "flex",
									fontSize: "20px",
									svg: { fontSize: "28px" },
									position: "relative",
								}}
								gap={3}
								alignItems="center"
								direction="row"
							>
								<Box
									sx={{
										width: "36px",
										height: "36px",
										color: palette.success.main,
										img: {
											width: "100%",
											height: "100%",
										},
									}}
								>
									{item.icon}
								</Box>
								<Typography
									sx={{ fontSize: { xs: "19px", md: "17px", lg: "20px" } }}
									color="white"
								>
									{item.text}
								</Typography>
							</Stack>
						</Grid>
					);
				})}
			</Grid>
			<a href={OPENSEA_COLLECTION}>
				<Button
					sx={{
						mx: "auto",
						fontSize: "17px",
						width: "275px",
						height: "54px",
						display: { xs: "none", md: "inline-flex" },
					}}
					startIcon={<OpenseaIcon />}
					variant="contained"
				>
					Buy on Opensea
				</Button>
			</a>
		</Stack>
	);
}

function Arrow() {
	return (
		<Stack
			alignItems="center"
			sx={{
				my: { xs: 5, md: 12 },
				position: "relative",
				zIndex: 100,
			}}
		>
			<img src={assets.arrowDown} alt="arrow" />
		</Stack>
	);
}

interface IGrass {
	sx?: SxProps;
}

function Grass({ sx = {} }: IGrass) {
	return (
		<Box
			sx={{
				maxWidth: "100%",
				width: "100%",
				top: -80,
				position: "absolute",
				left: 0,
				img: { width: "70%" },
				...sx,
			}}
		>
			<img src={assets.grassBack} alt="Grass" />
		</Box>
	);
}

function GrassHorizontal() {
	const containerRef = useRef<HTMLDivElement>(null);
	const grassRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const container = containerRef.current as HTMLDivElement;
		function handleResize() {
			let multiplier = 0;
			let aspectRatio = 0;
			if (window.innerWidth > 900) {
				multiplier = 0.3;
				aspectRatio = 1 / 0.325;
			} else {
				multiplier = 0.4;
				aspectRatio = 1 / 0.63;
			}
			const containerWidth = container.offsetWidth;
			const containerHeight = containerWidth / aspectRatio;
			container.style.height = containerHeight + "px";
			container.style.marginTop = -containerHeight * multiplier + "px";

			// aspectRatio: { xs: "1/0.63", md: "1/ 0.325" },
		}
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<Box
			ref={containerRef}
			sx={{
				width: "100%",
				// aspectRatio does not seem to work for some safari browsers
				// aspectRatio: { xs: "1.58", md: "1/ 0.325" },
				overflow: "visible",
				// mt: { xs: -20, md: -15 },
				zIndex: 15,
				position: "relative",
			}}
		>
			<Box
				ref={grassRef}
				sx={{
					position: "absolute",
					top: "0%",
					left: "50%",
					transform: "translateX(-50%)",
					width: { xs: "160%", md: "100%" },
					display: { xs: "block", md: "block" },
				}}
			>
				<img style={{ width: "100%" }} src={assets.grassFront} alt="Grass" />
			</Box>
		</Box>
	);
}
