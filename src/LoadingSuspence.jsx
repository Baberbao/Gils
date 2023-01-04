import React from "react";

const LoadingSuspence = () => {
  return (
    <div
      style={{
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        transformStyle: "preserve-3d",
        boxSizing: "border-box",
      }}
    >
      <div className="gooey">
        <span className="dot" />
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

export default LoadingSuspence;
