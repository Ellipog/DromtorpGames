import styles from "../css/Footer.module.css";
import ChatIcon from "@mui/icons-material/Chat";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";
import { useState } from "react";

function Footer(props) {
	const [activePage, setActivePage] = useState("leaderboard");

	return (
		<div className={styles.footer}>
			<Link to="/chat" className={activePage === "chat" ? styles.activePage : ""} onClick={() => setActivePage("chat")}>
				<ChatIcon sx={{ fontSize: 50 }} />
			</Link>
			<Link to="/" className={activePage === "leaderboard" ? styles.activePage : ""} onClick={() => setActivePage("leaderboard")}>
				<LeaderboardIcon sx={{ fontSize: 60 }} />
			</Link>
			<Link to="/profile" className={activePage === "profile" ? styles.activePage : ""} onClick={() => setActivePage("profile")}>
				<AccountBoxIcon sx={{ fontSize: 50 }} />
			</Link>
		</div>
	);
}

export default Footer;
