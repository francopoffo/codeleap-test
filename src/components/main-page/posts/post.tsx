import React from "react";
import classes from "./post.module.css";
import { PostType } from "@/types/post";

const Post: React.FC<{ post: PostType }> = (props) => {
  const post = props.post;

  return (
    <li className={classes.post}>
      <div className={classes.header}>
        <h2>{post.title}</h2>
      </div>
      <div className={classes.content}>
        <div className={classes.user}>
          <span>@{post.username}</span>
          <span className={classes.time}>{post.created_datetime}</span>
        </div>
        <p>{post.content}</p>
      </div>
    </li>
  );
};

export default Post;
