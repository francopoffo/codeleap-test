import React, { useState } from "react";
import classes from "./new-post-form.module.css";
import { updateAction } from "@/store/updateSlice";
import { useDispatch } from "react-redux";
import { store } from "@/store/updateSlice";

const NewPostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const dispatch = useDispatch();

  async function onSubmitHandler(e: React.FormEvent) {
    e.preventDefault();

    const counter = store.getState().counter;
    console.log("O valor do contador é:" + counter);

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

    dispatch(updateAction.add());

    const data = postRequest.json();

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
            if (content.trim() != "" && title.trim() != "") {
              setButtonDisabled(false);
            }
            if (content.trim() == "" || title.trim() == "") {
              setButtonDisabled(true);
            }
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
            if (content.trim() != "" && title.trim() != "") {
              setButtonDisabled(false);
            }
            if (content.trim() == "" || title.trim() == "") {
              setButtonDisabled(true);
            }
          }}
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={buttonDisabled}
        style={
          buttonDisabled ? { background: "grey" } : { background: "#7695EC" }
        }
      >
        Create
      </button>
    </form>
  );
};

export default NewPostForm;
