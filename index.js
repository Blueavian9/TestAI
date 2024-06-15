const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);

