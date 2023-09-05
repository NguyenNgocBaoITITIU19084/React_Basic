import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "../features/post/postSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleOnchangeTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  const handleOnChangeContent = (e) => {
    setContent(e.target.value);
    console.log(e.target.value);
  };
  const onAuthorChanged = (e) => {
    setUserId(e.target.value);
  };
  const handleOnClick = (e) => {
    e.preventDefault();
    if (!title || !content || !userId) {
      return alert("missing value");
    }
    dispatch(postAdded(title, content, userId));
    setContent("");
    setTitle("");
  };

  const renderUserList = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });
  return (
    <div>
      <input
        type="text"
        className="title"
        placeholder="Your title here!"
        value={title}
        onChange={handleOnchangeTitle}
      />
      <input
        type="text"
        className="content"
        placeholder="Your content here!"
        value={content}
        onChange={handleOnChangeContent}
      />
      <label htmlFor="postAuthor">Author:</label>
      <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
        <option value=""></option>
        {renderUserList}
      </select>
      <button onClick={handleOnClick}>Add</button>
    </div>
  );
};

export default AddPost;
