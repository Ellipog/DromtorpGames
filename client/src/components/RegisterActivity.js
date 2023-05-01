import styles from "../css/Profile.module.css";
import axios from "axios";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";

function RegisterActivity(props) {
  const [activity, setActivity] = useState({ name: "", date: null });
  const [error, setError] = useState(true);

  function registerActivity() {
    if (activity.name !== null && activity.date !== "") {
      axios.post("http://localhost:25584/sendActivity", {
        name: activity.name,
        date: activity.date,
      });
    } else {
      setError(false);
    }
  }

  return (
    <div className={styles.miniContainer}>
      <ArrowBackIosNewIcon onClick={() => props.setLogin("true")} />
      <h1>Opprett ny aktivitet</h1>
      <div className={styles.inputSection}>
        <p>Navn på aktivitet</p>
        <input type="text" onChange={(e) => setActivity({ ...activity, name: e.target.value })}></input>
      </div>
      <div className={styles.inputSection}>
        <p>Dato</p>
        <input type="number" onChange={(e) => setActivity({ ...activity, date: e.target.value })}></input>
      </div>
      <button onClick={() => registerActivity()}>Logg inn</button>
    </div>
  );
}

export default RegisterActivity;
