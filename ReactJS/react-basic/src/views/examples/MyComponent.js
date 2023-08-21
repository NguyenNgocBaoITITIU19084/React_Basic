import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "123",
  };
  handleInput = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <>
        <input type="text" onChange={(e) => this.handleInput(e)}></input>
        <h1>My name is {this.state.name}</h1>
      </>
    );
  }
}

export default MyComponent;
