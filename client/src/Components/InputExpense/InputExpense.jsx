import React, { useState } from "react";

export default function InputExpense({ addExpense }) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <input
        type="text"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
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
