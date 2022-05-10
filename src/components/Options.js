import React from "react";
import Option from "./option";

const Options = (props) => {
  return (
    <div>
      <button onClick={props.deleteOptions}>remove-options</button>
      {props.optionsData.map((option) => {
        return <Option optionText={option} />;
      })}
    </div>
  );
};

export default Options;
