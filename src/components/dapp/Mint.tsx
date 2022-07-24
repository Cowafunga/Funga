import { ethers } from "ethers";
import {
	CONTRACT_ADDR,
	RPC_PROVIDER,
	NETWORK_ID,
	EXPLORER_URI,
	OPENSEA_LINK,
} from "dapp/constants/constants";
import { ERC721_ABI } from "data/erc721_abi";
import whitelistData from "data/whitelist.json";
import { useCallback, useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

export default function Mint() {
	const stateEthers = new ethers.providers.JsonRpcProvider(
		RPC_PROVIDER,
		NETWORK_ID
	);
	const [state, setState] = useState({
		whitelist: whitelistData,
		totalMinted: 0,
		amount: 1,
		stage: null as null | number,

		balanceOf: null,
		dialogConfirmation: false,
		tokenID: null,
		contract: new ethers.Contract(CONTRACT_ADDR, ERC721_ABI, stateEthers),
		account: null as string | null,
		contractAddress: CONTRACT_ADDR,
		txHash: "",
		ethers: stateEthers as ethers.providers.JsonRpcProvider,
		signer: null as null | ethers.providers.JsonRpcSigner,
		provider: "not_web3",
		isLoading: false,
		loadingText: "loading...",
		boxError: false,
		errorText: "",
		dialogAdoptMany: false,
		dialogError: false,
		walletAddress: null,
		pricePerNFTWei: 10000000000000000,
		maxSupply: 1000,
		maxFlashSale: null,
		explorerURI: EXPLORER_URI,
		openseaLink: OPENSEA_LINK,
		ownedNFTs: [],
		id: "",
	});
	const timerOperations = useCallback(
		async function () {
			const [totalMinted, stage] = await Promise.all([
				Number(await state.contract.totalSupply()),
				Number(await state.contract.getStage()),
			]);
			const isLoading = false;

			console.log("minted = ", totalMinted, " / ", state.maxSupply);
			console.log("stage =", stage);

			let pricePerNFTWei = state.pricePerNFTWei;
			if (stage === 2) {
				pricePerNFTWei = 20000000000000000;
			}
			if (stage === 1) {
				pricePerNFTWei = 10000000000000000;
			}
			setState((s) => ({
				...s,
				isLoading,
				stage,
				pricePerNFTWei,
				totalMinted,
			}));
		},
		[state.contract, state.maxSupply, state.pricePerNFTWei]
	);

	useEffect(() => {
		const timer = setInterval(() => {
			timerOperations();
		}, 10000);

		setState((s) => ({
			...s,
			isLoading: true,
			loadingText: "retrieving smart contract state",
		}));
		timerOperations();

		console.log("Time operations ran");
		return () => {
			clearInterval(timer);
		};
	}, [timerOperations]);

	async function mintBtnPressed() {
		switch (state.stage) {
			case 3:
				await publicSale(state.amount);
				return;
			case 1:
				await preSaleBuy(state.amount);
				return;
			case 2:
				//TODO!
				await preSaleBuy(state.amount);
				return;
			case 999:
				setState((s) => ({
					...s,
					boxError: true,
					errorText: "Sold Out! Please check Opensea if you want to buy an NFT",
				}));
				return;
			default:
			// do what?
		}

		if (state.stage === 999) {
		}
	}

	async function preSaleBuy(quantity: number) {
		console.log("pre sale buy");
		const txHash = "";
		const boxError = false;
		const errorText = "";
		const stateEthers = new ethers.providers.Web3Provider(
			window.ethereum,
			"any"
		);

		setState((s) => ({
			...s,
			txHash,
			boxError,
			errorText,
			ethers: stateEthers,
		}));
		await stateEthers.send("eth_requestAccounts", []);

		const signer = stateEthers.getSigner();
		const contract = new ethers.Contract(CONTRACT_ADDR, ERC721_ABI, signer);
		const account = await signer.getAddress();

		setState((s) => ({ ...s, signer, contract, account }));

		//WHITELIST
		let whitelistInfo: typeof state.whitelist[0] | null = null;
		for (let i = 0; i < state.whitelist.length; i++) {
			if (
				String(state.whitelist[i]["Address"]).toLowerCase() ===
				String(state.account).toLowerCase()
			) {
				whitelistInfo = state.whitelist[i];
			}
		}
		if (!whitelistInfo) {
			const errorText =
				"Your address " +
				account +
				" is not whitelisted. Please connect with the correct wallet";
			const boxError = true;
			const isLoading = false;
			setState((s) => ({ ...s, errorText, boxError, isLoading }));
			return;
		}

		setState((s) => ({
			...s,
			isLoading: true,
			loadingText: "sending transaction to the blockchain...",
		}));

		try {
			const tx = await contract.presale1Get(whitelistInfo["Proof"]);
			if (tx.hash) {
				await onTxHashLogic(tx.hash, stateEthers);
			}
		} catch (err: any) {
			const isLoading = false;
			let boxError = false;
			let errorText = "";
			if (err.message.includes("denied")) {
				// toastify below
				//   this.$toast.info('you canceled the transaction')
				boxError = false;
				errorText = "";
			} else {
				if (err.message.includes("wallet limit")) {
					errorText = "over max allowed! your wallet limit has been reached";
				} else if (err.message.includes("insufficient funds")) {
					errorText = "you do not have enough ETH for this transaction";
				} else {
					errorText = err.message;
				}
				boxError = true;
			}
			setState((s) => ({ ...s, isLoading, boxError, errorText }));
		}
	}
	async function onTxHashLogic(
		txHash: string,
		stateEthers: ethers.providers.JsonRpcProvider
	) {
		console.log("onTxHashLogic ran");
		setState((s) => ({
			...s,
			isLoading: true,
			loadingText:
				"transaction submitted successfully. waiting for it to be mined...",
		}));

		const sleep = (milliseconds: number) => {
			return new Promise((resolve) => setTimeout(resolve, milliseconds));
		};

		await sleep(3000);
		// await state.ethers.waitForTransaction(txHash);
		await stateEthers.waitForTransaction(txHash);

		try {
			setState((s) => ({ ...s, txHash }));

			// let receipt = await state.ethers.getTransactionReceipt(txHash);
			let receipt = await stateEthers.getTransactionReceipt(txHash);
			if (receipt === null) {
				console.log(`Failed to get tx receipt....`);
				await sleep(3000);
			}
		} catch (er) {
			console.log(`Receipt error:`, er);
		} finally {
			setState((s) => ({ ...s, isLoading: false }));
		}
	}

	async function publicSale(quantity: number) {
		console.log("Public sale");
		const txHash = "";
		const boxError = false;
		const errorText = "";

		const stateEthers = new ethers.providers.Web3Provider(
			window.ethereum,
			"any"
		);
		setState((s) => ({
			...s,
			txHash,
			boxError,
			errorText,
			ethers: stateEthers,
		}));

		await stateEthers.send("eth_requestAccounts", []);

		const signer = stateEthers.getSigner();
		const contract = new ethers.Contract(CONTRACT_ADDR, ERC721_ABI, signer);

		const isLoading = true;
		const loadingText =
			"sending transaction to the blockchain. please check your wallet for confirmation";

		setState((s) => ({ ...s, signer, contract, isLoading, loadingText }));

		try {
			const tx = await contract.publicGet();
			if (tx.hash) {
				await onTxHashLogic(tx.hash, stateEthers);
			}
		} catch (err: any) {
			console.log("caught error");
			const isLoading = false;
			let boxError = true;
			let errorText = "";
			if (err.message.includes("denied")) {
				// toastify
				//   this.$toast.info('transaction canceled')
				boxError = false;
				errorText = "";
			} else if (err.message.includes("insufficient funds")) {
				errorText = "you do not have enough ETH for this transaction";
			} else {
				errorText = err.message;
			}
			console.log("Setting state", { isLoading });
			setState((s) => ({ ...s, errorText, boxError, isLoading }));
		}
	}
	console.log(state.isLoading);

	return (
		<Stack px={1} gap={2} alignItems="center">
			{state.totalMinted && state.totalMinted >= state.maxSupply && (
				<Box>
					<br />
					<span>SOLD OUT!</span>
					<br />
					Please check Opensea if you want to buy one!
					<br />
				</Box>
			)}

			{state.totalMinted < state.maxSupply - 20 && !state.isLoading && (
				<Box p={5} m={5} boxShadow={1}>
					<Box mt={5}>
						<form>
							<div>
								<div>
									<p>Quantity</p>
									<select
										value={state.amount}
										onChange={(e) =>
											setState((s) => ({
												...s,
												amount: Number(e.target.value),
											}))
										}
										disabled
										required
									>
										{Array.from({ length: 1 }, (_, i) => i + 1).map((item) => {
											return <option key={item}>{item}</option>;
										})}

										{/* <template slot="selection" slot-scope="{ item }">
                    <span class="mx-auto qty-amount">
                      {{ item }}
                    </span>
                  </template> */}
									</select>
								</div>
							</div>
						</form>

						<p>free whitelisted mint</p>
					</Box>
				</Box>
			)}
			{!state.isLoading && <StageStatus stage={state.stage} />}

			<Button
				onClick={() => {
					setState((s) => ({ ...s, errorText: "" }));
					mintBtnPressed();
				}}
				variant="contained"
			>
				Mint
			</Button>

			{state.isLoading && (
				<Stack alignItems="center" gap={2}>
					<CircularProgress />
					<Typography>{state.loadingText}</Typography>
				</Stack>
			)}
			{state.boxError && (
				<Alert sx={{ width: "500px", maxWidth: "100%" }} severity="error">
					{state.errorText}
				</Alert>
			)}

			{state.txHash && (
				<Box>
					<p>
						View Transaction on
						<span>
							<a
								target="_blank"
								href={`${state.explorerURI}/tx/${state.txHash}`}
								rel="noreferrer"
							>
								etherscan
							</a>
						</span>
						<br />
						Your NFT will show up in
						<a target="_blank" href={state.openseaLink} rel="noreferrer">
							opensea
						</a>{" "}
						shortly
					</p>
				</Box>
			)}

			<Box>
				<p>
					<a target="_blank" href={state.openseaLink} rel="noreferrer">
						opensea
					</a>
					<span> | </span>

					<a href="/other/disclaimer">disclaimer</a>
				</p>

				<p>
					please use
					<a
						href="https://metamask.io/download.html"
						target="_blank"
						rel="noreferrer"
					>
						metamask
					</a>
					desktop when minting
				</p>
			</Box>
		</Stack>
	);
}

function StageStatus({ stage }: { stage: number | null }) {
	return (
		<Box>
			{stage === 900 && <p>stage: SOLD OUT!</p>}
			{stage === 0 && <p>mint not started yet</p>}
			{stage === 1 && <p>stage: whitelist mint</p>}
			{stage === 2 && <p>stage: public mint</p>}
		</Box>
	);
}
