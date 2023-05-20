import React from "react";
import Budget from "./Budget";
import Total from "./Total";
import ProgressBarr from "./ProgressBarr";
import Progressporcent from "./Progressporcent";

const Dashboard = ({ list, listBudget, totalAmount, setShowForm }) => {
  const budget = listBudget.length > 0 ? listBudget[0].income : 0;

  return (
    <>
      <div className="row">
        <div className="balance-container">
          <ProgressBarr
            budget={budget}
            totalAmount={totalAmount}
            setShowForm={setShowForm}
          />
        </div>

        <div className="dashboard">
          <div>
            <Progressporcent budget={budget} totalAmount={totalAmount} />
          </div>
          <div className="align-center">
            <Budget listBudget={listBudget} setShowForm={setShowForm} />
            {list.length > 0 ? (
              list.length > 0 && <Total totalAmount={totalAmount} />
            ) : (
              <Total totalAmount={totalAmount} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
