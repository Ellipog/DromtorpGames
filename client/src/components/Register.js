import styles from "../css/Profile.module.css";

function Register() {
	return (
		<div className={styles.container}>
			<h1>Registrer</h1>
			<div className={styles.inputSection}>
				<p>Navn:</p>
				<input type="text"></input>
			</div>
			<div className={styles.inputSection}>
				<p>Mail:</p>
				<input type="email"></input>
			</div>
			<div className={styles.inputSection}>
				<p>Passord:</p>
				<input type="password"></input>
			</div>
			<button>Lag bruker</button>
		</div>
	);
}

export default Register;
