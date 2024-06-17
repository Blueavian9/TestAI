const express = require("express");
const path = require("path");
const cors = require("cors");
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3333;
const AWS = require("aws-sdk");

// Configure AWS SKD
AWS.config.update({
  region: "us-west-2", // Change this 
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,  
});

const polly = new AWS.Polly(); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/submit", (req, res) => {
  const body = req.body;
  console.log(body);
  res.status(200).json({ message: "submitted" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/api/synthesize", (req, res) => {
  const  { voice, audioText } = req.body;

  const params = {
    OutputFormat: "mp3", 
    Text: audioText, 
    VoiceId: voice, 
  }

  polly.synthesizeSpeech(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      res.status(500).json({ error: "Failed to synthesize speech"})
    } else {
      res.setHeader("Content-Type", "audio/mpeg");
      res.send(data.AudioStream); 
    }
  })
})

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);

// Original index.js code: 
// const express = require("express");
// const path = require("path");
// const cors = require("cors");
// const app = express();
// const port = process.env.PORT || 3333;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

// app.post("/api/submit", (req, res) => {
//   const body = req.body;
//   console.log(body);
//   res.status(200).json({ message: "submitted" });
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.listen(port, () =>
//   console.log(`Server running on http://localhost:${port}`)
// );