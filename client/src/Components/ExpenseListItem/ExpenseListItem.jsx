import React from "react";

export default function ExpenseListItem({
  id,
  name,
  cost,
  category,
  deleteExpense
}) {
  return (
    <div className="column">
      <h4>{name}</h4>
      <h3>${cost}</h3>
      <h4>{category}</h4>
      <button onClick={(e) => deleteExpense(id)} className="pointer">
        DELETE
      </button>
    </div>
  );
}
