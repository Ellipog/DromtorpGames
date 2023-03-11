import styles from "./css/App.module.css";
import Leaderboard from "./components/Leaderboard";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [leaderboardData, setLeaderboardData] = useState([
    { klasse: "1IMA", poeng: 3, date: Date.now() },
    { klasse: "1IMB", poeng: 27, date: Date.now() },
    { klasse: "2ITA", poeng: 30, date: Date.now() },
    { klasse: "1MPA", poeng: 33, date: Date.now() },
    { klasse: "2MPB", poeng: 46, date: Date.now() },
    { klasse: "1MPC", poeng: 36, date: Date.now() },
    { klasse: "2MPD", poeng: 37, date: Date.now() },
    { klasse: "1MPT", poeng: 33, date: Date.now() },
    { klasse: "2MPU", poeng: 22, date: Date.now() },
    { klasse: "2MPI", poeng: 36, date: Date.now() },
    { klasse: "3MPT", poeng: 26, date: Date.now() },
    { klasse: "2MPN", poeng: 16, date: Date.now() },
  ]);

  const [nextGame, setNextGame] = useState("Saint Patrick's Day");
  const [activePage, setActivePage] = useState("leaderboard");

  useEffect(() => {
    leaderboardData.sort((a, b) => {
      return b.poeng - a.poeng;
    });
  }, [leaderboardData]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>DRØMTORP GAMES</div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className={styles.nextGame}>
                  Neste game:&nbsp;<span>{nextGame}</span>
                </div>
                <div className={styles.leaderBoardContainer}>
                  {Object.values(
                    leaderboardData.sort((a, b) => {
                      return b.poeng - a.poeng;
                    })
                  ).map((data, i) => (
                    <Leaderboard key={i} data={leaderboardData[i]} i={i + 1} />
                  ))}
                </div>
              </>
            }
          ></Route>
          <Route
            path="/chat"
            element={
              <>
                <div>CHAT</div>
              </>
            }
          ></Route>
        </Routes>
        <Footer activePage={activePage} setActivePage={setActivePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
