import React from "react";
import ProgressBarr from "./ProgressBarr";
import Budget from "./Budget";
import Total from "./Total";

const Dashboard = ({ list, listBudget, totalAmount }) => {
  const budget = listBudget.length > 0 ? listBudget[0].income : 0;

  return (
    <div className="dashboard">
      <ProgressBarr budget={budget} totalAmount={totalAmount} />
      <div className="align-center">
        <Budget listBudget={listBudget} />
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
