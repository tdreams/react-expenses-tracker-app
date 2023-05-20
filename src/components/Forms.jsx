import React from "react";
import { IoCloseCircle } from "react-icons/io5";

const Forms = ({ handleSubmit, income, setIncome, setShowForm }) => {
  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };
  return (
    <div className="forms">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="close-flex">
            <label htmlFor="income">Income</label>
            <IoCloseCircle className="close-btn" onClick={toggleForm} />
          </div>
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
