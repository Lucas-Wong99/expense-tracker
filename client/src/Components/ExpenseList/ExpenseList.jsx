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
    <div className="column table-container">
      <h2 className="title">Your Expenses</h2>
      <table className="table">
        <tbody>
          <tr>
            <th>Name of Expense</th>
            <th>Cost</th>
            <th>Category</th>
            <th>ToDelete</th>
          </tr>
          {expensesMapped}
        </tbody>
      </table>
    </div>
  );
}
