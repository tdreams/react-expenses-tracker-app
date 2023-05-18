import React from "react";
const Forms = ({
  handleSubmit,
  nameBudget,
  setNameBudget,
  income,
  setIncome,
}) => {
  return (
    <div className="forms">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="namebuget">Budget name</label>
          <input
            required
            type="text"
            value={nameBudget}
            placeholder="Add a name for your budget"
            onChange={(e) => setNameBudget(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="income">Income</label>
          <input
            id="incom"
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          />
        </div>
        <div>
          <button className="add-btn">Add Item</button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
