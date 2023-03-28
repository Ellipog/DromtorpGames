import styles from "../css/Profile.module.css";
import axios from "axios";
import { useState } from "react";

function Register() {
	const [userData, setUserData] = useState({ mail: "", name: "", password: "" });
	const [mailError, setMailError] = useState(false);

	function createAccount() {
		console.log(userData);

		if (userData.mail !== "" && userData.name !== "" && userData.password !== "") {
			// axios.post("http://localhost:25584/createAccount", {
			// 	mail: userData.mail,
			// 	name: userData.name,
			// 	password: userData.password,
			// });
			console.log("Bruker laget");
		}
	}

	function setMail(e) {
		if (e.target.value.includes("@") || e.target.value.length < 8) {
			setUserData({ ...userData, mail: e.target.value });
			setMailError(false);
		} else if (e.target.value.length > 8) {
			setMailError(true);
		}
	}

	return (
		<div className={styles.container}>
			<h1>Registrer</h1>
			<div className={styles.inputSection}>
				<p>Navn:</p>
				<input type="text" onChange={(e) => setUserData({ ...userData, name: e.target.value })}></input>
			</div>
			<div className={styles.inputSection}>
				<p>Mail:</p>
				<input className={`${mailError ? styles.invalidMail : ""}`} type="email" onChange={(e) => setMail(e)}></input>
			</div>
			<div className={styles.inputSection}>
				<p>Passord:</p>
				<input type="password" onChange={(e) => setUserData({ ...userData, password: e.target.value })}></input>
			</div>
			<button onClick={() => createAccount()}>Lag bruker</button>
		</div>
	);
}

export default Register;
