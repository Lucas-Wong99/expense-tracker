import React, { useState, useEffect } from "react";
import axios from "axios";

import ExpenseList from "../ExpenseList/ExpenseList";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/expenses").then((res) => {
      console.log(res.data);
      setExpenses(res.data);
    });
  }, []);

  return (
    <div className="App">
      <ExpenseList expenses={expenses} />
    </div>
  );
}
