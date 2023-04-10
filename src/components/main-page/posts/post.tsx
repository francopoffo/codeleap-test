import React, { useState } from "react";
import classes from "./post.module.css";
import { PostType } from "@/types/post";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { store, updateAction } from "@/store/updateSlice";
import { useDispatch } from "react-redux";
import DeleteModal from "../modals/delete-modal";

const Post: React.FC<{ post: PostType }> = (props) => {
  const post = props.post;

  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const minutes1 = new Date(post.created_datetime).getTime() / (1000 * 60);
  const minutes2 = new Date().getTime() / (1000 * 60);
  const minutesDiff = (minutes2 - minutes1).toFixed(0);

  const user = store.getState().counter.user;

  function toggleModal() {
    setModal(!modal);
  }

  async function onDeleteHandler() {
    console.log(post.id);
    fetch(`https://dev.codeleap.co.uk/careers/${post.id}/`, {
      method: "DELETE",
    });
    dispatch(updateAction.add());
  }

  return (
    <>
      {modal && (
        <DeleteModal onDelete={onDeleteHandler} onCancel={toggleModal} />
      )}
      <li className={classes.post}>
        <div className={classes.header}>
          <h2>{post.title}</h2>

          {user == post.username && (
            <div className={classes.actions}>
              <button className={classes.action} onClick={toggleModal}>
                <MdDeleteForever
                  className={classes.icons}
                  style={{ color: "#FFFFFF", fontSize: "28px" }}
                />
              </button>
              <button className={classes.action}>
                <BiEdit
                  className={classes.icons}
                  style={{ color: "#FFFFFF", fontSize: "28px" }}
                ></BiEdit>
              </button>
            </div>
          )}
        </div>
        <div className={classes.content}>
          <div className={classes.user}>
            <span>@{post.username}</span>
            <span className={classes.time}>{`${minutesDiff} minutes ago`}</span>
          </div>
          <p>{post.content}</p>
        </div>
      </li>
    </>
  );
};

export default Post;
