import React from "react";

export default function ExpenseListItem({ name, cost, category }) {
  return (
    <div>
      <h4>{name}</h4>
      <h3>{cost}</h3>
      <h4>{category}</h4>
    </div>
  );
}
