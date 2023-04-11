import styles from "../css/Profile.module.css";
import axios from "axios";
import { useState } from "react";

function Register(props) {
	const [userData, setUserData] = useState({ mail: "", name: "", password: "" });
	const [error, setError] = useState(true);

	function createAccount() {
		if (userData.mail !== "" && userData.name !== "" && userData.password !== "" && userData.mail.includes("@")) {
			setError(true);
			axios.post("http://localhost:25584/createAccount", {
				mail: userData.mail,
				name: userData.name,
				password: userData.password,
			});
			props.setLogin("true");
			console.log(props.login);
		} else {
			setError(false);
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
				<input type="email" onChange={(e) => setUserData({ ...userData, mail: e.target.value })}></input>
			</div>
			<div className={styles.inputSection}>
				<p>Passord:</p>
				<input type="password" onChange={(e) => setUserData({ ...userData, password: e.target.value })}></input>
			</div>
			<button onClick={() => createAccount()}>Lag bruker</button>
			<p className={`${styles.errorText} ${error ? styles.hidden : ""}`}>Feil i minst 1 felt</p>
		</div>
	);
}

export default Register;
