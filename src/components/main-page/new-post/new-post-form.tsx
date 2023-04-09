import React, { useState } from "react";
import classes from "./new-post-form.module.css";

const NewPostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function onSubmitHandler(e: React.FormEvent) {
    e.preventDefault();

    const newPost = {
      username: localStorage.getItem("username"),
      title: title,
      content: content,
    };

    const postRequest = await fetch("https://dev.codeleap.co.uk/careers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    const data = postRequest.json();
    console.log(data);

    setTitle("");
    setContent("");
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <h2>What&apos;s on your mind?</h2>
      <div className={classes.inputs}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
      </div>
      <div className={classes.inputs}>
        <label htmlFor="content">Content</label>
        <textarea
          rows={5}
          id="content"
          className={classes.contentTextArea}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default NewPostForm;
