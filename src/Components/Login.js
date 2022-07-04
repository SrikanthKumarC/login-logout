import React, { useState } from "react";
import { checkDisability } from "../Utilities/utils";

import "./Login.css";

function Login({ isVisible }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isDisabled = checkDisability(email, password);

  if (isVisible) {
    return (
      <div className="login">
        <h2>Login</h2>
        <form className="login-form">
          <label htmlFor="email">Enter eMail Address</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Enter Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="button" disabled={isDisabled} value={"Login"} />
        </form>
      </div>
    );
  } 
}

export default Login;
