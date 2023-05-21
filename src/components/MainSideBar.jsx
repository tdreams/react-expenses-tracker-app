import React from "react";
import { IoAddCircle } from "react-icons/io5";

const MainSideBar = ({ setShowFormExpense, selectedExpense }) => {
  const toggleForm = () => {
    setShowFormExpense((prevShowForm) => !prevShowForm);
  };

  return (
    <div className="main-sidebar">
      <div className="current-exp">
        {selectedExpense ? (
          <>
            <div className="current-item">
              <h3>{selectedExpense.item}</h3>
            </div>
            <div className="current-info">
              <p>
                <span>Id:</span> {selectedExpense.id}
              </p>
              {selectedExpense.amount !== 0 ? (
                <p>
                  <span>Amount:</span> $
                  {Number(selectedExpense.amount).toFixed(2)}
                </p>
              ) : (
                <p>
                  <span>Amount:</span>: $0.00
                </p>
              )}
              <p>
                <span>Category</span>: {selectedExpense.category}
              </p>
            </div>
          </>
        ) : (
          <p>No expense selected</p>
        )}
      </div>
    </div>
  );
};

export default MainSideBar;
