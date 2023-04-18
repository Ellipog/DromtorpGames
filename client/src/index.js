import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import styles from "./css/App.module.css";
import Leaderboard from "./routes/Leaderboard";
import Profile from "./routes/Register";
import Footer from "./components/Footer";
import Test from "./components/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<div className={styles.container}>
			<div className={styles.header}>DRØMTORP GAMES</div>
			<div className={styles.routing}>
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={
								<>
									<Leaderboard />
								</>
							}
						></Route>
						<Route
							path="/chat"
							element={
								<>
									<Test />
								</>
							}
						></Route>
						<Route
							path="/profile"
							element={
								<>
									<Profile />
								</>
							}
						></Route>
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</div>
	</React.StrictMode>
);
