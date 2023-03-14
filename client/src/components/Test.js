import { useState } from "react";
import axios from "axios";

function Test() {
	const [klasseData, setKlasseData] = useState({ klasse: "1IMC", score: 5, date: Date.now() });

	function sendKlasseData() {
		console.log(klasseData);

		axios.post("http://localhost:25584/sendScores", {
			klasse: klasseData.klasse,
			score: klasseData.score,
			date: klasseData.date,
		});
	}

	return (
		<div>
			<button onClick={() => sendKlasseData()}>TRYKK MEG</button>
		</div>
	);
}

export default Test;
