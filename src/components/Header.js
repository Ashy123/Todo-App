import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>this.props.titleData</h1>
        <h2>this.props.subtitleData</h2>
      </div>
    );
  }
}
export default Header;
