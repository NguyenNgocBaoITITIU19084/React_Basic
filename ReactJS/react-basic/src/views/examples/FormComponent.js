import React from "react";
import ChildComponent from "./ChildComponent";
import SecondChildComponent from "./SecondChildComponent";
import AddComponent from "./AddComponent";

class FormComponent extends React.Component {
  state = {
    listJob: [
      { id: "abc1", job: "Developers", salary: "500$" },
      { id: "abc2", job: "Developers", salary: "600$" },
      { id: "abc3", job: "Developers", salary: "700$" },
    ],
  };
  addNewState = (state) => {
    console.log("from parent component", state);
    this.setState({
      listJob: [...this.state.listJob, state],
    });
  };
  deleteState = (state) => {
    console.log("deleteState", state);
    let currentState = this.state.listJob;
    currentState = currentState.filter((item) => item.id !== state.id);
    this.setState({
      listJob: currentState,
    });
  };
  render() {
    return (
      <>
        <AddComponent addState={this.addNewState} />
        <ChildComponent
          job={this.state.listJob}
          deleteState={this.deleteState}
        />
        <SecondChildComponent job={this.state.listJob} />
      </>
    );
  }
}
export default FormComponent;
