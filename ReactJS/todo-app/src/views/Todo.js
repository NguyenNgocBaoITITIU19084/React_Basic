import React from "react";
import AddTodoForm from "../components/AddTodoForm";
import TableTodoComponent from "../components/TableTodoComponent";
import TodoStyle from "../styles/Todo.scss";

// --------------------------------------------------------
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
    console.log(id)
    this.setState({
      todoList: this.state.todoList.filter((item) => item.id !== id),
    });
  };

  editState = (id, title) => {
    let newList = this.state.todoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title: title,
        }
      }
      return { ...item }
    })
    this.setState({ todoList: newList })
  };

  render() {
    let { todoList } = this.state;
    console.log(todoList)

    return (
      <React.Fragment>
        <AddTodoForm addState={this.addNewState} />
        <TableTodoComponent
          todoList={todoList}
          removeState={this.removeState}
          editState={this.editState}
        />
      </React.Fragment>
    );
  }
}

export default Todo;
