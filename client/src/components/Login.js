import styles from "../css/Profile.module.css";
import axios from "axios";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";

function Login(props) {
	const [userData, setUserData] = useState({ mail: "", password: "" });
	const [error, setError] = useState(true);

	function login() {
		if (userData.mail !== "" && userData.password !== "" && userData.mail.includes("@")) {
			setError(true);
			axios
				.post("http://localhost:25584/login", {
					mail: userData.mail,
					password: userData.password,
				})
				.then((res) => {
					console.log(res.data);
					if (res.data.mail === userData.mail) {
						props.setLogin("true");
					} else {
						setError(false);
					}
				});
		} else {
			setError(false);
		}
	}

	return (
		<div className={styles.miniContainer}>
			<ArrowBackIosNewIcon onClick={() => props.setLogin("false")} />
			<h1>Login</h1>
			<div className={styles.inputSection}>
				<p>Mail:</p>
				<input type="email" onChange={(e) => setUserData({ ...userData, mail: e.target.value })}></input>
			</div>
			<div className={styles.inputSection}>
				<p>Passord:</p>
				<input type="password" onChange={(e) => setUserData({ ...userData, password: e.target.value })}></input>
			</div>
			<button onClick={() => login()}>Logg inn</button>
			<p className={`${styles.errorText} ${error ? styles.hidden : ""}`}>Feil i minst 1 felt</p>
		</div>
	);
}

export default Login;
