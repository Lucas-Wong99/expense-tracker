import React from "react";

export default function ExpenseListItem({
  id,
  name,
  cost,
  category,
  deleteExpense
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>${cost}</td>
      <td>{category}</td>
      <td>
        <button
          onClick={(e) => deleteExpense(id)}
          className="pointer button is-danger"
        >
          DELETE
        </button>
      </td>
    </tr>
  );
}
