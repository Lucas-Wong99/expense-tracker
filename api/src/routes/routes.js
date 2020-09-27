const router = require("express").Router();

const getLastRecordID = async (db) => {
  const res = await db.query(
    `SELECT * FROM expenses
    ORDER BY date_created DESC
    LIMIT 1`
  );
  const id = res.rows[0].id;
  return id;
};

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.json({ message: "WASSSAP" });
  });

  router.get("/expenses", (req, res) => {
    db.query("SELECT * FROM expenses", (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  });

  router.post("/expenses/new", (req, res) => {
    const { name, cost, category } = req.body;
    db.query(
      "INSERT INTO expenses (name, cost, category) VALUES ($1, $2, $3)",
      [name, cost, category]
    ).then(async (data) => {
      const lastRowID = await getLastRecordID(db);
      res
        .status(201)
        .json({ status: "success", message: "Expense added.", id: lastRowID });
    });
  });

  router.post("/expenses/delete", (req, res) => {
    const { id } = req.body;
    db.query("DELETE FROM expenses WHERE id = $1", [id], (error) => {
      if (error) {
        throw error;
      }
      res.status(201).json({ status: "success", message: "Expense deleted" });
    });
  });

  return router;
};
