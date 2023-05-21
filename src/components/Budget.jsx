import React from "react";
import { IoAddCircle } from "react-icons/io5";
import { HiQuestionMarkCircle } from "react-icons/hi";

const Budget = ({ listBudget, setShowForm }) => {
  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };
  return (
    <div className="budget-container">
      <div className="title-container">
        <div className="flex-space-between">
          <p>Budget</p>
          <div className="question-mark">
            <HiQuestionMarkCircle />
            <div className="info-add">
              <p>Click on the button to add your budget</p>
            </div>
          </div>
        </div>
      </div>

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
