const pool = require("./pool");

pool.on("connect", () => {
  console.log("connected to the db");
});

/**
 * Create Expenses Table
 * CREATE TABLE test
  (id SERIAL PRIMARY KEY, 
  name VARCHAR(100) UNIQUE NOT NULL, 
  phone VARCHAR(100));
 */
const createExpensesTable = () => {
  const expenseCreateQuery = `CREATE TABLE IF NOT EXISTS expenses
  (id SERIAL PRIMARY KEY, 
  name VARCHAR(100) UNIQUE NOT NULL, 
  cost INTEGER NOT NULL,
  category VARCHAR(100) NOT NULL,
  created_on DATE NOT NULL)`;

  pool
    .query(expenseCreateQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/**
 * Drop User Table
 */
const dropExpensesTable = () => {
  const expensesDropQuery = "DROP TABLE IF EXISTS expenses";
  pool
    .query(expensesDropQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/**
 * Create Tables
 */
const createTable = () => {
  createExpensesTable();
};

/**
 * Drop Tables
 */
const dropTable = () => {
  dropExpensesTable();
};

pool.on("remove", () => {
  console.log("client removed");
  process.exit(0);
});

export { createTable, dropTable };

require("make-runnable");
