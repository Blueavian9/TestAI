const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/submit", (req, res) => {
  const body = req.body;
  console.log(body);
  res.json({message: "submitted"}), 200;
});
app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);
