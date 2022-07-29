export default function styleWeb3Account() {
	let elem = document.querySelector("onboard-v2") as HTMLElement;
	if (!elem) return;
	let parent = elem.shadowRoot as ShadowRoot;

	if (!parent) return;

	let content = parent.querySelector("style + div") as HTMLDivElement;

	if (!content) return;
	content.style.top = "60px";
	content.style.right = "50%";

	content.style.transform = "translateX(50%) translateZ(100px)";
	content.style.zIndex = "3";
	// content.style.background = "white";
	content.style.width = "max-content";

	const network = content.querySelector(".network") as HTMLDivElement;
	const address = content.querySelector(".address") as HTMLDivElement;
	const balance = content.querySelector(".balance") as HTMLDivElement;
	if (!network || !address || !balance) return;
	balance.style.whiteSpace = "nowrap";
	address.style.whiteSpace = "nowrap";

	network.style.marginLeft = "10px";
}
