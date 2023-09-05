import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { postUpdated, postDeleted } from "../features/post/postSlice";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const renderPostList = posts.map((post) => {
    return (
      <li key={post.id}>
        <Post post={post} />
      </li>
    );
  });

  return (
    <div>
      <ul>{renderPostList}</ul>
    </div>
  );
};

const Post = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const handleSaveButton = () => {
    if (!title || !content) {
      return alert("Missing value");
    }
    dispatch(postUpdated({ id: post.id, title: title, content: content }));
    setIsEdit(false);
  };
  const handleEditButton = () => {
    setIsEdit(true);
  };
  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleOnchangeContent = (e) => {
    setContent(e.target.value);
  };
  const handleDeleteButton = (id) => {
    dispatch(postDeleted({ id }));
  };
  let postContent;
  isEdit === false
    ? (postContent = (
        <p>
          id: {post.id} title: {title} content: {content}
          <Link to={`/post/${post.id}`}>view post</Link>
          <button onClick={handleEditButton}>Edit</button>
          <button onClick={() => handleDeleteButton(post.id)}>Delete</button>
        </p>
      ))
    : (postContent = (
        <>
          <input type="text" value={title} onChange={handleOnChangeTitle} />
          <input type="text" value={content} onChange={handleOnchangeContent} />
          <button onClick={handleSaveButton}>Save</button>
        </>
      ));
  return <>{postContent}</>;
};

export default PostList;
