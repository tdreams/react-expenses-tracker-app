import React from "react";
import ProgressBarr from "./ProgressBarr";
import Budget from "./Budget";
import Total from "./Total";

const Dashboard = ({ list, totalAmount }) => {
  const budget = list.reduce((sum, item) => sum + parseFloat(item.income), 0);

  return (
    <div className="dashboard">
      <ProgressBarr budget={budget} totalAmount={totalAmount} />
      <div className="align-center">
        <Budget list={list} budget={budget} />
        {list.length > 0 ? (
          list.length > 0 && <Total totalAmount={totalAmount} />
        ) : (
          <Total totalAmount={totalAmount} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
