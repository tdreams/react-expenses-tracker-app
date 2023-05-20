import React from "react";
import { IoAddCircle } from "react-icons/io5";

const Budget = ({ listBudget, setShowForm }) => {
  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };
  return (
    <div className="budget-container">
      <div className="title-container">Budget</div>

      <div className="amount-container">
        {/* {listBudget.length === 0
          ? listBudget.map((e) => `$ ${Number(e.income)}`)
          : `$ 0`} */}

        {listBudget.length === 0 ? (
          <ul>
            <a onClick={toggleForm}>
              <IoAddCircle />
            </a>
          </ul>
        ) : (
          listBudget.map((e) => `$ ${Number(e.income)}`)
        )}
      </div>
    </div>
  );
};

export default Budget;
