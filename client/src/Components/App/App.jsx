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

  return (
    <section className="section-padding-medium">
      <InputExpense />
      <ExpenseList expenses={expenses} />
    </section>
  );
}
