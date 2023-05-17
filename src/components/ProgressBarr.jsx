import React, { useState, useEffect } from "react";

const ProgressBarr = ({ budget, totalAmount }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (budget > 0 && totalAmount > 0) {
      const percentage = (totalAmount / budget) * 100;
      setProgress(percentage.toFixed(2));
    } else {
      setProgress(0);
    }
  }, [budget, totalAmount]);

  return (
    <div className="progress-display">
      <p className="progress-name">My expenses</p>
      <div className="progress-budget">
        <p className="title-budget">Budget</p>
        <div className="progress-bar">
          <div className="pourcentage">
            <p>{`${progress}%`}</p>
          </div>
          <div className="progress-barb">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarr;
