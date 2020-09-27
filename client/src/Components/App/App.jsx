import React, { useState, useEffect } from "react";
import axios from "axios";

import ExpenseList from "../ExpenseList/ExpenseList";
import InputExpense from "../InputExpense/InputExpense";
import Header from "../Header/Header";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/expenses").then((res) => {
      setExpenses(res.data);
    });
  }, []);

  const addExpense = (name, cost, category) => {
    if (name === "" || cost === "" || category === "") return;
    return axios
      .post("http://localhost:9000/api/expenses/new", {
        name,
        cost,
        category
      })
      .then((res) => {
        const newExpenses = [
          ...expenses,
          {
            id: res.data.id,
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
      .then((res) => {
        const filter = [...expenses].filter((expense) => {
          if (expense.id === id) {
            return null;
          } else {
            return expense;
          }
        });
        setExpenses(filter);
      });
  };

  return (
    <section className="hero is-fullheight">
      <br />
      <div className="container is-fluid">
        <Header />
        <div className="columns is-centered">
          <div className="column is-four-fiths">
            <InputExpense addExpense={addExpense} />
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
          </div>
        </div>
      </div>
    </section>
  );
}
