import React from "react";

class TableTodoComponent extends React.Component {
  state = {
    isEdit: false,
    title: "",
  };
  handeleDeleteButton = (id) => {
    this.props.removeState(id);
  };
  handleEditButton = () => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  };
  handleEditInput = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  render() {
    let { todoList } = this.props;
    return (
      <>
        <div className="todo-table">
          <ul>
            {todoList &&
              todoList.length > 0 &&
              todoList.map((item, index) => {
                return (
                  <li key={item.id}>
                    {this.state.isEdit === false ? (
                      <>
                        <span>
                          {index + 1} - {item.title}
                        </span>
                        <button onClick={() => this.handleEditButton()}>
                          Edit
                        </button>
                      </>
                    ) : (
                      <>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => this.handleEditInput(e)}
                        />
                        <button onClick={() => this.handleEditButton()}>
                          Save
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
