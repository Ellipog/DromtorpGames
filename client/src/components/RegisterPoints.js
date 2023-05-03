import styles from "../css/Profile.module.css";
import axios from "axios";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState, useRef } from "react";

function RegisterPoints(props) {
  const [points, setPoints] = useState({ points: null, class: "" });
  const [error, setError] = useState(true);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  function registerPoints() {
    if (points.points !== null && points.class !== "") {
      axios.post("http://195.204.109.253:25567/sendScores", {
        points: points.points,
        class: points.class,
        date: Date.now(),
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
      <h1>Registrer poeng</h1>
      <div className={styles.inputSection}>
        <p>Klasse</p>
        <input type="text" ref={ref1} onChange={(e) => setPoints({ ...points, class: e.target.value })}></input>
      </div>
      <div className={styles.inputSection}>
        <p>Poeng</p>
        <input type="number" ref={ref2} onChange={(e) => setPoints({ ...points, points: e.target.value })}></input>
      </div>
      <button onClick={() => registerPoints()} className={styles.btn}>
        Registrer
      </button>
    </div>
  );
}

export default RegisterPoints;
