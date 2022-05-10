import React, { useState } from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import Addoption from "./Addoption";

const App = () => {
  const [Option, setOption] = useState([
    "visit Paris",
    "visit Egypt",
    "visit Seychelles",
    "visit Tunis",
  ]);
  const title = "Todo Application";
  const subtitle = "todos to focus on";

  const handleDeleteOption = () => {
    setOption([]);
  };

  const handlePick = () => {
    const randomNumber = Math.floor(Math.random() * Options.length);
    const dataItem = Options[randomNumber];
    alert(dataItem);
  };

  const handleAddoption = (item) => {
    if (!item) {
      return "enter valid value to add item";
    } else if (Option.indexOf(item) > -1) {
      return "this option already exists";
    }

    setOption([...Option, item]);
  };

  return (
    <div>
      <Header titleData={title} susbtitleData={subtitle} />
      <Action pickOption={handlePick} />
      <Options optionsData={Option} deleteOptions={handleDeleteOption} />
      <Addoption addItem={handleAddoption} />
    </div>
  );
};

export default App;
