import React from "react";

const EditPost = (props) => {
  let { post } = props;
  return (
    <>
      <input type="text" value={post.title} />
      <input type="text" value={post.content} />
    </>
  );
};

export default EditPost;
