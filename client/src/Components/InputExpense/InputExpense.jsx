import React, { useState } from "react";

export default function InputExpense({ addExpense }) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState("");

  return (
    <form action="">
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
  // <div className="is-two-fiths">
  //   <div className="column field">
  //     <label className="label">Name of Expense</label>
  //     <div className="control">
  //       <input
  //         className="input"
  //         type="text"
  //         placeholder="Text input"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //     </div>
  //   </div>
  //   <div class="column field">
  //     <label class="label">Cost of Expense</label>
  //     <div class="control">
  //       <input
  //         class="input"
  //         type="text"
  //         placeholder="Text input"
  //         value={cost}
  //         onChange={(e) => setCost(e.target.value)}
  //       />
  //     </div>
  //   </div>
  //   <div class="column field">
  //     <label class="label">Category</label>
  //     <div class="control">
  //       <input
  //         class="input"
  //         type="text"
  //         placeholder="Text input"
  //         value={category}
  //         onChange={(e) => setCategory(e.target.value)}
  //       />
  //     </div>
  //   </div>
  //   <div class="field is-grouped">
  //     <div class="control">
  //       <button class="button is-link">Submit</button>
  //     </div>
  //     <div class="control">
  //       <button class="button is-link is-light">Cancel</button>
  //     </div>
  //   </div>
  // </div>
  // );
}
