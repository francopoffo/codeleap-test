import React from "react";
import classes from "./layout.module.css";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className={classes.layout}>
      <div className={classes.header}>
        <h1>Network</h1>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
