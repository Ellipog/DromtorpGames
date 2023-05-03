import styles from "../css/Profile.module.css";
import axios from "axios";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState, useRef } from "react";

function RegisterActivity(props) {
  const [activity, setActivity] = useState({ name: "", date: null });
  const [error, setError] = useState(true);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  function registerActivity() {
    if (activity.name !== null && activity.date !== "") {
      axios.post("http://195.204.109.253:25567/sendActivity", {
        name: activity.name,
        date: activity.date,
      });
      ref1.current.value = "";
      ref2.current.value = "";
    } else {
      setError(false);
    }
  }

  return (
    <div className={styles.miniContainer}>
      <ArrowBackIosNewIcon className={styles.back} onClick={() => props.setLogin("true")} />
      <h1>Opprett ny aktivitet</h1>
      <div className={styles.inputSection}>
        <p>Navn på aktivitet</p>
        <input type="text" ref={ref1} onChange={(e) => setActivity({ ...activity, name: e.target.value })}></input>
      </div>
      <div className={styles.inputSection}>
        <p>Dato</p>
        <input type="date" ref={ref2} onChange={(e) => setActivity({ ...activity, date: e.target.value })}></input>
      </div>
      <button onClick={() => registerActivity()} className={styles.btn}>
        Opprett
      </button>
    </div>
  );
}

export default RegisterActivity;
