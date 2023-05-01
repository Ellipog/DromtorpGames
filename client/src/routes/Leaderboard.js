import LeaderboardData from "../components/LeaderboardData";
import styles from "../css/Leaderboard.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [nextGame, setNextGame] = useState([{ name: "Loading...", date: 0 }]);

  function getLeaderboardData() {
    axios.get("http://localhost:25584/fetchScores").then((res) => {
      setLeaderboardData(res.data);
    });
    axios.get("http://localhost:25584/fetchActivities").then((res) => {
      setNextGame(res.data);
    });
  }

  useEffect(() => {
    getLeaderboardData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.nextGame}>
        Neste game:<br></br>
        {nextGame[0].name}, {nextGame[0].date.toLocaleString().slice(5, 10).replace("-", "/")}
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
