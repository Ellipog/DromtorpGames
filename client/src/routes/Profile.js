import styles from "../css/Profile.module.css";
import { useState } from "react";
import Register from "../components/Register";

function Profile() {
	const [login, setLogin] = useState("false");

	if (login === "false") {
		return (
			<div className={styles.box}>
				<div className={styles.container}>
					<button onClick={() => setLogin("login")}>Logg inn</button>
					<button onClick={() => setLogin("register")}>Registrer</button>
				</div>
			</div>
		);
	} else if (login === "true") {
		return (
			<div className={styles.box}>
				<div className={styles.container}>
					<h1>Profile</h1>
				</div>
			</div>
		);
	} else if (login === "login") {
		return (
			<div className={styles.box}>
				<div className={styles.container}>
					<h1>Login</h1>
				</div>
			</div>
		);
	} else if (login === "register") {
		return (
			<div className={styles.box}>
				<Register />
			</div>
		);
	}
}

export default Profile;
