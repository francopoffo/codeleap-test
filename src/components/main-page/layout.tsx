import React from "react";
import classes from "./layout.module.css";

const Layout: React.FC = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.header}>
        <h1>CodeLeap Network</h1>
      </div>
    </div>
  );
};

export default Layout;
