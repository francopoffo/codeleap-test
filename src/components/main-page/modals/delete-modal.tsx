import React from "react";
import classes from "./delete-modal.module.css";

const DeleteModal: React.FC<{ onCancel: any; onDelete: any }> = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.overlay} onClick={props.onCancel}>
        <div className={classes.popup}>
          <h2>Are you sure you want to delete this item?</h2>
          <div className={classes.actions}>
            <button className={classes.cancel} onClick={props.onCancel}>
              Cancel
            </button>
            <button className={classes.delete} onClick={props.onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
