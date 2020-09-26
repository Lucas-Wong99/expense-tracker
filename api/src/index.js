const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
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

// const getBooks = (request, response) => {
//   pool.query("SELECT * FROM books", (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

// const addBook = (request, response) => {
//   const { author, title } = request.body;

//   pool.query(
//     "INSERT INTO books (author, title) VALUES ($1, $2)",
//     [author, title],
//     (error) => {
//       if (error) {
//         throw error;
//       }
//       response.status(201).json({ status: "success", message: "Book added." });
//     }
//   );
// };

// app
//   .route("/books")
//   // GET endpoint
//   .get(getBooks)
//   // POST endpoint
//   .post(addBook);
