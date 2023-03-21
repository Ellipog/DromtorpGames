import styles from "../css/Profile.module.css";
import { useState } from "react";

function Profile() {
	const [login, setLogin] = useState("false");

	if (login === "false") {
		return (
			<div className={styles.container}>
				<button onClick={() => setLogin("login")}>Logg inn</button>
				<button onClick={() => setLogin("register")}>Registrer</button>
			</div>
		);
	} else if (login === "true") {
		return (
			<div className={styles.container}>
				<h1>Profile</h1>
			</div>
		);
	} else if (login === "login") {
		return (
			<div className={styles.container}>
				<h1>Login</h1>
			</div>
		);
	} else if (login === "register") {
		return (
			<div className={styles.container}>
				<h1>Register</h1>
			</div>
		);
	}
}

export default Profile;
