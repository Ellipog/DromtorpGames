import styles from "../css/Profile.module.css";
import axios from "axios";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";

function RegisterPoints(props) {
	const [points, setPoints] = useState({ points: null, class: "" });
	const [error, setError] = useState(true);

	function registerPoints() {
		if (points.points !== null && points.class !== "") {
			axios.post("http://localhost:25584/sendScores", {
				points: points.points,
				class: points.class,
				date: Date.now(),
			});
		} else {
			setError(false);
		}
	}

	return (
		<div className={styles.miniContainer}>
			<ArrowBackIosNewIcon onClick={() => props.setLogin("false")} />
			<h1>Registrer poeng for klasse</h1>
			<div className={styles.inputSection}>
				<p>Klasse</p>
				<input type="text" onChange={(e) => setPoints({ ...points, class: e.target.value })}></input>
			</div>
			<div className={styles.inputSection}>
				<p>Poeng</p>
				<input type="number" onChange={(e) => setPoints({ ...points, points: e.target.value })}></input>
			</div>
			<button onClick={() => registerPoints()}>Logg inn</button>
		</div>
	);
}

export default RegisterPoints;
