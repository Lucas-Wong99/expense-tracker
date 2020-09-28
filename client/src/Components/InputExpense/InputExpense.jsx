import React, { useState } from "react";
import Select from "react-select";

import { options } from "../../helpers/selectOptions";

export default function InputExpense({ addExpense }) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState({});

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="column box has-background-grey-lighter"
    >
      <h2 className="subtitle">Add an Expense</h2>
      <div className="columns is-vcentered">
        <div className="column">
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            maxLength="30"
            placeholder="Name of Expense..."
          />
        </div>
        <div className="column">
          <input
            className="input"
            type="number"
            value={cost}
            placeholder="Cost of Expense..."
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div className="column">
          <Select
            options={options}
            placeholder="Select Category..."
            isSearchable
            onChange={setCategory}
          />
        </div>
      </div>
      <div className="buttons is-right">
        <button
          className="button is-link"
          onClick={() => {
            addExpense(name, cost, category.label);
            setName("");
            setCost("");
            setCategory("");
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
