import { useState } from "react";
import React from "react";
import classes from "./post.module.css";
import { PostType } from "@/types/post";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { store } from "@/store/updateSlice";

const Post: React.FC<{ post: PostType }> = (props) => {
  const post = props.post;

  const minutes1 = new Date(post.created_datetime).getTime() / (1000 * 60);
  const minutes2 = new Date().getTime() / (1000 * 60);
  const minutesDiff = (minutes2 - minutes1).toFixed(0);

  const user = store.getState().counter.user;
  console.log(user);

  return (
    <li className={classes.post}>
      <div className={classes.header}>
        <h2>{post.title}</h2>

        {user == post.username && (
          <div className={classes.actions}>
            <button className={classes.action}>
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
  );
};

export default Post;
