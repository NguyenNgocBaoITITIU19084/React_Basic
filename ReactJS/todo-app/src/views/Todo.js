import React from "react";
import AddTodoForm from "../components/AddTodoForm";
import TableTodoComponent from "../components/TableTodoComponent";
import TodoStyle from "../styles/Todo.scss";
class Todo extends React.Component {
  state = {
    todoList: [
      // { id: 1, title: "do homework" },
      // { id: 2, title: "text with friends" },
    ],
  };
  addNewState = (state) => {
    this.setState({
      todoList: [...this.state.todoList, state],
    });
  };
  removeState = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((item) => item.id !== id),
    });
  };
  render() {
    let { todoList } = this.state;
    return (
      <>
        <AddTodoForm addState={this.addNewState} />
        <TableTodoComponent
          todoList={todoList}
          removeState={this.removeState}
        />
      </>
    );
  }
}

export default Todo;
