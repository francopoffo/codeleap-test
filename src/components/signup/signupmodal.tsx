import React, { useState } from "react";
import classes from "./signupmodal.module.css";
import { updateAction } from "@/store/updateSlice";
import { useDispatch } from "react-redux";

const SignUpModal: React.FC = () => {
  const [username, setUsername] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [modal, setModal] = useState(true);

  const dispatch = useDispatch();

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    dispatch(updateAction.setUser(username));
    console.log(username);
    setModal(false);
  };

  if (modal) {
    return (
      <div className={classes.modal}>
        <div className={classes.overlay}>
          <form className={classes.signup} onSubmit={onSubmitHandler}>
            <h2>Welcome to the network!</h2>
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
                  if (username.trim() == "") {
                    setButtonDisabled(true);
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
