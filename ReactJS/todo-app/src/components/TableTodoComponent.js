import React from "react";

// --------------------------------------------------------
class TableTodoComponent extends React.Component {
  state = {
    isEdit: false,
    title: "",
  };

  handleEditOpen = () => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  }

  handeleDeleteButton = (id) => {
    this.props.removeState(id);
  };

  handleEditButton = (id) => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
    this.props.editState(id, this.state.title);
  };

  handleEditInput = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="todo-table">
          <ul>
            {
              this.props.todoList &&
              this.props.todoList.length > 0 &&
              this.props.todoList.map((item, index) => {
                return (
                  <li key={item.id}>
                    {this.state.isEdit === false ? (
                      <React.Fragment>
                        <span>
                          {index + 1} - {item.title}
                        </span>
                        <button onClick={() => this.handleEditOpen()}>
                          Edit
                        </button>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <input
                          type="text"
                          value={this.title}
                          onChange={(e) => this.handleEditInput(e)}
                        />
                        <button onClick={() => this.handleEditButton(item.id)}>
                          Save
                        </button>
                      </React.Fragment>
                    )}

                    <button onClick={() => this.handeleDeleteButton(item.id)}>
                      Delete
                    </button>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default TableTodoComponent;
