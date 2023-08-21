import React from "react";

class ChildComponent extends React.Component {
  state = {
    isShow: false,
  };
  handleShowHide = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  handleOnClickDelete = (job) => {
    console.log("handleOnClickDelete: ", job);
    this.props.deleteState(job);
  };
  render() {
    const { job } = this.props;
    let { isShow } = this.state;
    console.log(">>> check sate isShow", this.state.isShow);
    return (
      <>
        {isShow === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <>
              {job.map((item, index) => {
                return (
                  <p key={item.id}>
                    {item.job} - {item.salary}{" "}
                    <span onClick={() => this.handleOnClickDelete(item)}>
                      x
                    </span>
                  </p>
                );
              })}
            </>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
