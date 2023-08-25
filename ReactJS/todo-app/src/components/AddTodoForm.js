import React from "react";
import { ToastContainer, toast } from "react-toastify";
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
      return toast.error("Missing Value");
    }
    this.props.addState({
      id: Math.floor(Math.random() * 600) + 1,
      title: this.state.title,
    });
    return toast.success("Successfull Add a Todo");
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
