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

const user = new mongoose.Schema({
	mail: String,
	name: String,
	password: String,
	isAdmin: Boolean,
});
const User = mongoose.model("User", user);

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
	console.log(req.body);
	const filter = { klasse: req.body.class.toUpperCase() };
	KlasseInfo.find(filter).then((data) => {
		const update = {
			klasse: req.body.class.toUpperCase(),
			score: parseInt(req.body.points) + data[0].score,
			date: req.body.date,
		};
		const options = { upsert: true };
		KlasseInfo.findOneAndUpdate(filter, update, options)
			.then((updatedData) => {
				console.log("Updated data:", updatedData);
				res.send("Data received and saved successfully");
			})
			.catch((err) => {
				console.error(err);
				res.status(500).send("Error saving data");
			});
	});
});

app.post("/createAccount", (req, res) => {
	const newUser = new User({
		mail: req.body.mail,
		name: req.body.name,
		password: req.body.password,
		isAdmin: false,
	});

	newUser
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

app.post("/login", (req, res) => {
	console.log(req.body);
	User.findOne({ mail: req.body.mail, password: req.body.password }).then((data) => {
		if (data) {
			console.log(data);
			res.json(data);
		} else {
			data = { mail: "Bruker ikke funnet" };
			res.json(data);
			console.log(data);
		}
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
