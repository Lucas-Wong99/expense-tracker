import React from "react";

import ExpenseList from "../ExpenseList/ExpenseList";
import InputExpense from "../InputExpense/InputExpense";
import Header from "../Header/Header";

import useApplicationData from "../../hooks/useApplicationData";

export default function App() {
  const { expenses, addExpense, deleteExpense } = useApplicationData();

  return (
    <section className="hero is-fullheight">
      <br />
      <div className="container is-fluid">
        <Header />
        <div className="column columns is-centered">
          <div className="column is-four-fiths">
            <InputExpense addExpense={addExpense} />
            <h2 className="title">Your Expenses</h2>
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
          </div>
        </div>
      </div>
    </section>
  );
}
