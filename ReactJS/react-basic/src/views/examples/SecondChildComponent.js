import React from "react";

const SecondChildComponent = (props) => {
  const { job } = props;
  return (
    <>
      {job.map((item, index) => {
        return (
          <p key={item.id}>
            {item.job} - {item.salary}
          </p>
        );
      })}
    </>
  );
};

export default SecondChildComponent;
