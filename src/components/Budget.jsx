import React from "react";

const Budget = ({ list }) => {
  return (
    <div className="budget-container">
      <div className="title-container">Budget</div>
      <div className="amount-container">
        {list.length > 0 ? list.map((e) => `$ ${Number(e.income)}`) : `$ 0`}
      </div>
    </div>
  );
};

export default Budget;
