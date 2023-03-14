const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const db = "mongodb+srv://admin:26u8tkZebfStExLI@dromtorpgames.3swznsh.mongodb.net/GamesInfo";
const port = 25584;

mongoose.set("strictQuery", false);
mongoose.connect(db, {});

const klasseScore = new mongoose.Schema({
	klasse: String,
	score: Number,
	date: Number,
});

const KlasseInfo = mongoose.model("KlasseInfo", klasseScore);
app.use(express.json());

const corsOptions = {
	origin: (origin, callback) => {
		if (!origin) {
			callback(null, true);
		} else {
			const allowedOrigins = ["http://localhost:3000"];
			const isAllowed = allowedOrigins.includes(origin);
			callback(isAllowed ? null : new Error("Origin not allowed"), isAllowed);
		}
	},
	credentials: true,
};
app.use(cors(corsOptions));

app.post("/sendScores", (req, res) => {
	const newKlasseInfo = new KlasseInfo({
		klasse: req.body.klasse,
		score: req.body.score,
		date: req.body.date,
	});

	newKlasseInfo
		.save()
		.then((savedData) => {
			console.log("Saved data:", savedData);
			res.send("Data received and saved successfully");
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send("Error saving data");
		});
});

app.get("/fetchScores", (req, res) => {
	KlasseInfo.find({ klasse: { $exists: true }, score: { $exists: true } }).then((data) => {
		res.json(
			data.sort((a, b) => {
				return b.poeng - a.poeng;
			})
		);
	});
});

app.listen(port, () => {
	console.log(`Backend server listening on port ${port}`);
});
