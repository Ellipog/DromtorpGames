import { useState } from "react";
import axios from "axios";

function Test() {
	const [klasseData, setKlasseData] = useState({ klasse: "1MPA", score: 6, date: Date.now() });
	const [userData, setUserData] = useState({ mail: "alex@gmail.com", name: "Alexander Andreassen", password: "Apetroll" });

	function sendKlasseData() {
		console.log(klasseData);

		axios.post("http://localhost:25584/sendScores", {
			klasse: klasseData.klasse,
			score: klasseData.score,
			date: klasseData.date,
		});
	}

	function sendUserData() {
		console.log();

		axios.post("http://localhost:25584/createAccount", {
			mail: userData.mail,
			name: userData.name,
			password: userData.password,
		});
	}

	return (
		<div>
			<button onClick={() => sendKlasseData()}>Ny klasse</button>
			<button onClick={() => sendUserData()}>Ny bruker</button>
		</div>
	);
}

export default Test;
