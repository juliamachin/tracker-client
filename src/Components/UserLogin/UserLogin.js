// import './App.css';
import { useRef, useState, useEffect } from "react";

function UserLogin() {
  const userRef = useRef();
  const errRef = useRef();

  return (
    <div className="App">
      <h1>User Login</h1>
      <label>
        Username:
        <input type="text" placeholder="username" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" placeholder="password" />
      </label>
      <br />
      <input type="submit" name="Login" />
    </div>
  );
}

export default UserLogin;
