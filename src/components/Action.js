import React from "react";

const Action = () => {
  const handlePick = () => {
    alert("action component");
  };
  return (
    <div>
      <button onClick={handlePick}>What to do</button>
    </div>
  );
};
export default Action;
