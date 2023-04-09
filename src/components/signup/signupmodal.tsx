import React, { useState } from "react";
import classes from "./signupmodal.module.css";

const SignUpModal: React.FC = () => {
  const [username, setUsername] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [modal, setModal] = useState(true);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    setModal(false);
  };

  if (modal) {
    return (
      <div className={classes.modal}>
        <div className={classes.overlay}>
          <form className={classes.signup} onSubmit={onSubmitHandler}>
            <h2>Welcome to CodeLeap network!</h2>
            <div>
              <label htmlFor="username">Please enter your username</label>
              <input
                type="text"
                id="username"
                placeholder="Your name"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (username.trim() != "") {
                    setButtonDisabled(false);
                  }
                }}
              ></input>
            </div>
            <button
              type="submit"
              disabled={buttonDisabled}
              style={
                buttonDisabled
                  ? { background: "grey" }
                  : { background: "#7695EC" }
              }
            >
              ENTER
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SignUpModal;
