import React from "react";

import ExpenseListItem from "../ExpenseListItem/ExpenseListItem";

export default function ExpenseList({ expenses, deleteExpense }) {
  const expensesMapped = expenses.map((expense) => {
    return (
      <ExpenseListItem
        key={expense.id}
        id={expense.id}
        name={expense.name}
        cost={expense.cost}
        category={expense.category}
        deleteExpense={deleteExpense}
      />
    );
  });
  return (
    <div className="column">
      <div className="columns">{expensesMapped}</div>
    </div>
  );
}
