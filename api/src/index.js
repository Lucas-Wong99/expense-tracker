const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT || 9000;

const app = express();

const { pool } = require("./config");
const routes = require("./routes/routes");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", routes(pool));

app.get("/", (req, res) => {
  res.redirect("/api");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
