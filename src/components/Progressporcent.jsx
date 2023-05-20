import React from "react";

const Progressporcent = ({ budget, totalAmount }) => {
  const progress = budget !== 0 ? (totalAmount / budget) * 100 : 0;
  const progressStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="progress-display">
      <div className="progress-budget">
        <p className="title-budget">Budget Percentages</p>
        <div className="progress-bar">
          <div className="pourcentage">
            <p>{`${progress.toFixed()}%`}</p>
          </div>
          <div className="progress-barb">
            <div className="progress-bar-fill" style={progressStyle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progressporcent;
