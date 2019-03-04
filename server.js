const mongoose = require("mongoose"),
      express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      cors = require("cors"),
      MongoClient = require('mongodb').MongoClient


let Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  spinSegment: {
    type: Number,
    required: true
  },
  totalPoints: {
    type: Number,
    required: true
  }
});

let User = mongoose.model("Users", UserSchema);


mongoose.connect("mongodb://127.0.0.1:8000/db");

mongoose.connection.on("open", () => {
  console.log("Connected to server");
});

function createUser(data) {
    const user = new User({
        username: data.username,
        spinSegment: data.spinSegment,
        totalPoints: data.totalPoints
    });

    return user.save();
}

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.post("/spin", (req, res) => {
    User.find({ username: req.body.username }).then(d => res.send(d));
});

app.get("/segments", (req, res) => {
    User.find().then(d => res.send(d));
});

app.get("/score", (req, res) => {
    User.find({ username: req.body.username }).then(d => res.send(d.totalPoints));
});



const server = app.listen("8000", () => {
  console.log("Listen 8000");
});