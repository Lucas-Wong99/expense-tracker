import React, { useState, useEffect } from "react";
import axios from "axios";

import ExpenseList from "../ExpenseList/ExpenseList";
import InputExpense from "../InputExpense/InputExpense";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/expenses").then((res) => {
      console.log(res.data);
      setExpenses(res.data);
    });
  }, []);

  const addExpense = (name, cost, category) => {
    return axios
      .post("http://localhost:9000/api/expenses/new", {
        name,
        cost,
        category
      })
      .then((res) => {
        console.log(res);
        const newExpenses = [
          ...expenses,
          {
            name: name,
            cost: cost,
            category: category
          }
        ];
        setExpenses(newExpenses);
      });
  };

  const deleteExpense = (id) => {
    return axios
      .post("http://localhost:9000/api/expenses/delete", {
        id: id
      })
      .then((res) => {});
  };

  return (
    <section className="">
      <InputExpense addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </section>
  );
}
