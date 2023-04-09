import React from "react";
import classes from "./new-post-form.module.css";

const NewPostForm: React.FC = () => {
  return (
    <form className={classes.form}>
      <h2>What&apos;s on your mind?</h2>
      <div className={classes.inputs}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title"></input>
      </div>
      <div className={classes.inputs}>
        <label htmlFor="content">Content</label>
        <textarea
          rows={5}
          id="content"
          className={classes.contentTextArea}
        ></textarea>
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default NewPostForm;
