import Dapp from "pages/Dapp";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/mint" element={<Dapp />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
