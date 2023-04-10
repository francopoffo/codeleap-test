import React, { useState } from "react";
import classes from "./edit-modal.module.css";

const EditModal: React.FC<{ onCancel: any; onEdit: any }> = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function editHandler() {
    props.onEdit(title, content);
    props.onCancel();
  }

  return (
    <div className={classes.modal}>
      <div className={classes.overlay}>
        <div className={classes.popup}>
          <h2>Edit item</h2>
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
          <div className={classes.actions}>
            <button className={classes.cancel} onClick={props.onCancel}>
              Cancel
            </button>
            <button className={classes.edit} onClick={editHandler}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
