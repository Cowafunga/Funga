import Dapp from "pages/Dapp";
import Home from "pages/Home";
import NewDapp from "pages/NewDapp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/mint" element={<Dapp />} />
				<Route path="/new-mint" element={<NewDapp />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
