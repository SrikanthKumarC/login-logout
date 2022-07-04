import React from "react";
import { useState } from "react";
import {checkDisability} from '../Utilities/utils'

function Signup({isVisible}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('')
    const isDisabled = checkDisability(email, password, confirmPassword)
    if (isVisible) {
    return (
        <div className="login">
        <h2>Sign up</h2>
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
           <label htmlFor="confirm-password">Confirm Password</label>
          <input
            name="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input type="button" disabled={isDisabled} value={"Sign up"} />
        </form>
      </div>
    )
    }
}

export default Signup