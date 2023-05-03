const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

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
  password: String,
});
const User = mongoose.model("User", user);

const activity = new mongoose.Schema({
  name: String,
  date: Date,
});
const Activity = mongoose.model("Activity", activity);

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

app.post("/sendActivity", (req, res) => {
  const newActivity = new Activity({
    name: req.body.name,
    date: req.body.date,
  });

  newActivity
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
  User.findOne({ mail: req.body.mail }).then((data) => {
    if (data) {
      console.log(data);
      const match = bcrypt.compareSync(req.body.password, data.password);
      console.log(match);
      if (match) {
        res.json(data);
      } else {
        data = { mail: "Bruker ikke funnet" };
        res.json(data);
        console.log(data);
      }
    } else {
      data = { mail: "Bruker ikke funnet" };
      res.json(data);
      console.log(data);
    }
  });
});

app.post("/createAccount", (req, res) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    console.log(req.body);
    console.log(hash);
    const newUser = new User({
      mail: req.body.mail,
      password: hash,
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

app.get("/fetchActivities", (req, res) => {
  Activity.find().then((data) => {
    Activity.collection.deleteMany({ date: { $lt: new Date(Date.now() - 24 * 60 * 60 * 1000) } });
    res.json(
      data.sort((a, b) => {
        return a.date - b.date;
      })
    );
  });
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
