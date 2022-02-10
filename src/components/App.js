import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import Addoption from "./Addoption";

class App extends React.Component {
  render() {
    const title = "Todo Application";
    const subtitle = "todos to focus on";
    return (
      <div>
        <Header titledata={title} subtitleData={subtitle} />
        <Action />
        <Options />
        <Addoption />
      </div>
    );
  }
}
export default App;
