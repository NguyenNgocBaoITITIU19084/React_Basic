import React from "react";
class ClickMeComponent extends React.Component {
  state = {
    clicked: 0,
  };
  handleClickedIncrease = (e) => {
    this.setState({
      clicked: (this.state.clicked += 1),
    });
  };

  handleClickedDecrease = (e) => {
    this.setState({
      clicked: (this.state.clicked -= 1),
    });
  };
  render() {
    return (
      <>
        <button onClick={(e) => this.handleClickedIncrease(e)}>
          Click Me!
        </button>
        <button onClick={(e) => this.handleClickedDecrease(e)}>
          Click to Decrease!
        </button>
        <h1>Number of clicked is: {this.state.clicked}</h1>
      </>
    );
  }
}

export default ClickMeComponent;
