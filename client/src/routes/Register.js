import styles from "../css/Profile.module.css";
import { useState } from "react";
import Login from "../components/Login";

function Profile() {
	const [login, setLogin] = useState("false");

	if (login === "true") {
		return (
			<div className={styles.container}>
				<h1>Profile</h1>
			</div>
		);
	} else if (login === "false") {
		return (
			<div className={styles.container}>
				<Login login={login} setLogin={setLogin} />
			</div>
		);
	}
}

export default Profile;
