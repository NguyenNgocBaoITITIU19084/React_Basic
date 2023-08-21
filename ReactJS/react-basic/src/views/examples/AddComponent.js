import React from "react";

class AddComponent extends React.Component {
  state = {
    job: "",
    salary: 0,
  };

  handleJob = (e) => {
    this.setState({
      job: e.target.value,
    });
  };
  handleSalary = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">>> state from child component:", this.state);
    if (!this.state.job || !this.state.salary) {
      return alert("Missing value");
    }
    this.props.addState({
      id: Math.floor(Math.random() * 600) + 1,
      ...this.state,
    });
    this.setState({
      job: "",
      salary: "",
    });
  };
  render() {
    return (
      <>
        <form>
          <p>Job:</p>
          <input
            type="text"
            className="Name"
            onChange={(e) => this.handleJob(e)}
            value={this.state.job}
          ></input>
          <p>Salary: </p>
          <input
            type="text"
            className="Age"
            onChange={(e) => this.handleSalary(e)}
            value={this.state.salary}
          ></input>
          <button type="submit" onClick={(e) => this.handleSubmit(e)}>
            Submit!
          </button>
        </form>
      </>
    );
  }
}
export default AddComponent;
