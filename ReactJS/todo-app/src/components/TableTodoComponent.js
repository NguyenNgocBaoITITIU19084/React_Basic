import React from "react";
import { toast } from "react-toastify";
class TableTodoComponent extends React.Component {
  state = {
    isEditTodo: {},
  };
  handeleDeleteButton = (id) => {
    this.props.removeState(id);
  };
  handleEditButton = (item) => {
    this.setState({
      isEditTodo: item,
    });
  };
  handleSaveButton = () => {
    this.setState({
      isEditTodo: {},
    });
    toast.success("successfull edited");
  };
  handleOnChangeEditInput = (e) => {
    let todo = { ...this.state.isEditTodo };
    todo.title = e.target.value;
    this.props.editSate(todo);
  };
  render() {
    let { todoList } = this.props;
    let { isEditTodo } = this.state;
    let isChecked = Object.keys(isEditTodo).length === 0;
    return (
      <>
        <div className="todo-table">
          <ul>
            {todoList &&
              todoList.length > 0 &&
              todoList.map((item, index) => {
                return (
                  <li key={item.id}>
                    {isChecked === true ? (
                      <>
                        <span>
                          {index + 1} - {item.title}
                        </span>
                        <button onClick={() => this.handleEditButton(item)}>
                          Edit
                        </button>
                      </>
                    ) : item.id === isEditTodo.id ? (
                      <>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => this.handleOnChangeEditInput(e)}
                        />
                        <button onClick={() => this.handleSaveButton()}>
                          Save
                        </button>
                      </>
                    ) : (
                      <>
                        <span>
                          {index + 1} - {item.title}
                        </span>
                        <button onClick={() => this.handleEditButton(item)}>
                          Edit
                        </button>
                      </>
                    )}

                    <button onClick={() => this.handeleDeleteButton(item.id)}>
                      Delete
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </>
    );
  }
}
export default TableTodoComponent;
