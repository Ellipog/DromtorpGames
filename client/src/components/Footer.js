import styles from "../css/Footer.module.css";
import ChatIcon from "@mui/icons-material/Chat";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";

function Footer(props) {
  const activePage = props.activePage;
  const setActivePage = props.setActivePage;

  return (
    <div className={styles.footer}>
      <div className={activePage === "chat" ? styles.activePage : ""} onClick={() => setActivePage("chat")}>
        <Link to="/chat">
          <ChatIcon sx={{ fontSize: 50 }} />
        </Link>
      </div>
      <div className={activePage === "leaderboard" ? styles.activePage : ""} onClick={() => setActivePage("leaderboard")}>
        <Link to="/">
          <LeaderboardIcon sx={{ fontSize: 60 }} />
        </Link>
      </div>
      <div className={activePage === "profile" ? styles.activePage : ""} onClick={() => setActivePage("profile")}>
        <Link to="/profile">
          <AccountBoxIcon sx={{ fontSize: 50 }} />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
