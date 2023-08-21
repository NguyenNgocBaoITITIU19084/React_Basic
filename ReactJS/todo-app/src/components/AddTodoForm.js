import React from "react";

class AddTodoForm extends React.Component {
  state = {
    id: 0,
    title: "",
  };
  handleInput = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  addNewTodo = (e) => {
    e.preventDefault();
    if (!this.state.title) {
      return alert("Missing Value!");
    }
    this.props.addState({
      id: Math.floor(Math.random() * 600) + 1,
      title: this.state.title,
    });
  };
  render() {
    return (
      <>
        <div className="todo-container">
          <h2 className="title">Todo App - Bao Nguyen</h2>
          <input
            className="input-todo"
            type="text"
            placeholder="Your todo list"
            onChange={(e) => this.handleInput(e)}
          />
          <button
            className="btn-add"
            type="submit"
            onClick={(e) => this.addNewTodo(e)}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}
export default AddTodoForm;
