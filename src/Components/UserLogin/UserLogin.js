import "./UserLogin.css";
import React, { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LOGIN_URL = "/auth/";
function UserLogin() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/mycalendar";

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrorMsg("");
  }, [username, password]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.token;
      setAuth({ username, password, accessToken });
      setUsername("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
      if (!error?.response) {
        setErrorMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrorMsg("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setErrorMsg("Unauthorized");
      } else {
        setErrorMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="user-login">
      <div>
        <p
          ref={errRef}
          className={errorMsg ? "errormsg" : "offscreen"}
          aria-live="assertive"
        >
          {errorMsg}
        </p>
        <h1>User Login</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          placeholder="username"
          ref={userRef}
          autoComplete="off"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          required
        />
        <br />
        <input className="button" type="submit" name="Sign In" />
      </form>
      <div>
        <p>Don't already have an account?</p>
        <a href="http://localhost:3000/register">Sign Up</a>
      </div>
    </div>
  );
}
export default UserLogin;
