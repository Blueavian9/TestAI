const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3333;

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