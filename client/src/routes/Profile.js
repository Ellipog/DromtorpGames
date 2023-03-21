import styles from "../css/Profile.module.css";
import { useState } from "react";

function Profile() {
	const [login, setLogin] = useState(false);

	if (login === false) {
		return (
			<div className={styles.container}>
				<button onClick={() => setLogin(true)}>Logg inn</button>
				<button>Registrer</button>
			</div>
		);
	} else {
		return (
			<div className={styles.container}>
				<h1>Profile</h1>
			</div>
		);
	}
}

export default Profile;
