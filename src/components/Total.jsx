import React from "react";

const Total = ({ totalAmount }) => {
  const formattedTotalAmount = totalAmount ? totalAmount.toFixed() : 0;

  return (
    <div className="budget-container">
      <div className="title-container">Total expense</div>
      <div className="amount-container">{`$ ${formattedTotalAmount}`}</div>
    </div>
  );
};

export default Total;
