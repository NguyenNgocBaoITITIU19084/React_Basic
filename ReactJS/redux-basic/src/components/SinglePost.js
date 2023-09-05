import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SinglePost = () => {
  let { id } = useParams();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === id)
  );
  return (
    <div>
      SinglePost with id {id}
      {post ? (
        <p>
          id: {post.id} title: {post.title} content: {post.content}
        </p>
      ) : (
        <p>Not Found!</p>
      )}
    </div>
  );
};

export default SinglePost;
