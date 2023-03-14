import styles from "./css/App.module.css";
import Leaderboard from "./routers/Leaderboard";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./components/Test";

function App() {
	return (
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
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
