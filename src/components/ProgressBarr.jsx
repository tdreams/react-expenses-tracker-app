import React from "react";

const ProgressBarr = ({ budget, totalAmount, setShowForm }) => {
  const balance = budget !== 0 ? budget - totalAmount : 0;

  return (
    <div className="progress-display">
      <div className="balance">
        <p className="title-balance">Balance</p>
        <div className="remain-balance">
          <p>{`$ ${balance.toFixed()}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarr;
