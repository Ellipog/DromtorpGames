import LeaderboardData from "../components/LeaderboardData";
import styles from "../css/Leaderboard.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Leaderboard() {
	const [leaderboardData, setLeaderboardData] = useState([]);
	const [nextGame, setNextGame] = useState("Saint Patrick's Day");

	function getLeaderboardData() {
		axios.get("http://localhost:25584/fetchScores").then((res) => {
			setLeaderboardData(res.data);
		});
	}

	useEffect(() => {
		getLeaderboardData();
	}, []);

	return (
		<div>
			<div className={styles.nextGame}>
				Neste game:&nbsp;<span>{nextGame}</span>
			</div>
			<div className={styles.leaderBoardContainer}>
				{Object.values(
					leaderboardData.sort((a, b) => {
						return b.score - a.score;
					})
				).map((data, i) => (
					<LeaderboardData key={i} data={leaderboardData[i]} i={i + 1} />
				))}
			</div>
		</div>
	);
}

export default Leaderboard;
