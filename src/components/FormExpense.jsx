import React from "react";

const FormExpense = ({
  handleSubmitexpense,
  item,
  setItem,
  amount,
  setAmount,
  date,
  setDate,
  category,
  setCategory,
}) => {
  return (
    <div className="forms">
      <form onSubmit={handleSubmitexpense}>
        <div>
          <label>Date </label>
          <input
            required
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Select a category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="category"
            required
          >
            <option value="">Select Category</option>
            <option value="groceries">Groceries</option>
            <option value="transportation">Transportation</option>
            <option value="housing">Housing</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="healthcare">Healthcare</option>
            <option value="clothing">Clothing</option>
            <option value="personal care">Personal care</option>
            <option value="education">Education</option>
            <option value="travel">Travel</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="item">Item</label>
          <input
            required
            id="item"
            type="text"
            value={item}
            placeholder="Add a new item..."
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
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

export default FormExpense;
