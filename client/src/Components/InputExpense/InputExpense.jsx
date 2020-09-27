import React, { useState } from "react";

export default function InputExpense() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="is-two-fiths">
      <div className="column field">
        <label className="label">Name of Expense</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Text input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div class="column field">
        <label class="label">Cost of Expense</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Text input"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
      </div>
      <div class="column field">
        <label class="label">Category</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Text input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>
  );
}
