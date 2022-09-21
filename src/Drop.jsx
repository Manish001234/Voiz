import React, { useState } from "react";

const Drop = ({ selected, setSelected }) => {
  const [isActive, setIsactive] = useState(false);
  const options = ["HTML", "CSS", "JAVASCRIPT", "REACT", "MONGODB"];
  return (
    <div>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsactive(!isActive)}>
          {selected}
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((option) => (
              <div
                onClick={(e) => {
                  setSelected(option);
                  setIsactive(false);
                }}
                className="dropdown-item"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Drop;
