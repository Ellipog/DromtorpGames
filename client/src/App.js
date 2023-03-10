import styles from "./css/App.module.css";
import Leaderboard from "./components/Leaderboard";
import { useState, useEffect } from "react";

function App() {
	const [leaderBoard, setLeaderBoard] = useState([
		{ klasse: "1IMA", poeng: 3, date: Date.now() },
		{ klasse: "1IMB", poeng: 27, date: Date.now() },
		{ klasse: "2ITA", poeng: 30, date: Date.now() },
		{ klasse: "2MPA", poeng: 33, date: Date.now() },
		{ klasse: "2MPB", poeng: 36, date: Date.now() },
		{ klasse: "2MPB", poeng: 36, date: Date.now() },
		{ klasse: "2MPB", poeng: 36, date: Date.now() },
		{ klasse: "2MPB", poeng: 36, date: Date.now() },
		{ klasse: "2MPB", poeng: 36, date: Date.now() },
		{ klasse: "2MPB", poeng: 36, date: Date.now() },
		{ klasse: "2MPB", poeng: 36, date: Date.now() },
		{ klasse: "2MPB", poeng: 36, date: Date.now() },
		{ klasse: "2MPB", poeng: 36, date: Date.now() },
	]);

	useEffect(() => {
		leaderBoard.sort((a, b) => {
			return b.poeng - a.poeng;
		});
	}, [leaderBoard]);

	return (
		<div className={styles.container}>
			<div className={styles.leaderBoardContainer} onClick={console.log(leaderBoard)}>
				{Object.values(
					leaderBoard.sort((a, b) => {
						return b.poeng - a.poeng;
					})
				).map((data, i) => (
					<Leaderboard key={i} data={leaderBoard[i]} i={i + 1} />
				))}
			</div>
		</div>
	);
}

export default App;
