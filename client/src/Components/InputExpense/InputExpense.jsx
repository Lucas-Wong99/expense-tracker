import React, { useState } from "react";

export default function InputExpense({ addExpense }) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()} className="column">
      <div className="container">
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          maxLength="30"
        />
      </div>
      <div className="container">
        <label>Cost:</label>
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </div>
      <div className="container">
        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          maxLength="30"
        />
      </div>
      <button
        onClick={() => {
          addExpense(name, cost, category);
          setName("");
          setCost("");
          setCategory("");
        }}
      >
        Submit
      </button>
    </form>
  );
}
