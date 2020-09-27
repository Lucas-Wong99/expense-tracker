import React from "react";

import ExpenseListItem from "../ExpenseListItem/ExpenseListItem";

export default function ExpenseList({ expenses }) {
  const expensesMapped = expenses.map((expense) => {
    return (
      <ExpenseListItem
        key={expense.id}
        name={expense.name}
        cost={expense.cost}
        category={expense.category}
      />
    );
  });
  return <div className="list">{expensesMapped}</div>;
}
