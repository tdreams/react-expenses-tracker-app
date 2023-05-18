import React from "react";

const Budget = ({ listBudget }) => {
  return (
    <div className="budget-container">
      <div className="title-container">Budget</div>
      <div className="amount-container">
        {listBudget.length > 0
          ? listBudget.map((e) => `$ ${Number(e.income)}`)
          : `$ 0`}
      </div>
    </div>
  );
};

export default Budget;
