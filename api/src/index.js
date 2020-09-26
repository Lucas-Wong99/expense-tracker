const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 9000;

const routes = require("./routes/routes");

app.use(cors());
app.use(bodyparser.json());
app.use(morgan("dev"));

app.use("/api", routes);

app.get("/", (req, res) => {
  res.redirect("/api");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
