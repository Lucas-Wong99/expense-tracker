import { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {
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
          {
            id: res.data.id,
            name: name,
            cost: cost,
            category: category
          },
          ...expenses
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
  return { expenses, addExpense, deleteExpense };
};

export default useApplicationData;
