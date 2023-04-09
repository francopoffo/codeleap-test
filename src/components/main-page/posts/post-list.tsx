import React from "react";
import { Posts } from "@/types/posts";
import Post from "./post";
import classes from "./post-list.module.css";

const PostList: React.FC<{ posts: Posts }> = (props) => {
  const posts = props.posts;

  return (
    <ul className={classes.posts}>
      {posts.map((post: { id: React.Key | null | undefined }) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
