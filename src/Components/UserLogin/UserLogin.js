import "./UserLogin.css";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../Context/AuthProvider";
import axios from "../../api/axios";

const LOGIN_URL = "/auth/";
function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [valid, setValid] = useState(false);
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
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
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      setAuth({ username, password, accessToken });
      setUsername("");
      setPassword("");
      setValid(true);
    } catch (error) {
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
        <label>
          Username:
          <input
            type="text"
            placeholder="username"
            ref={userRef}
            autoComplete="off"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            required
          />
        </label>
        <br />
        <input className="button" type="submit" name="Sign In" />
      </form>
      <div>
        <p>Don't already have an account?</p>
        <a href="http://localhost:3000/newuser">Sign Up</a>
      </div>
    </div>
  );
}
export default UserLogin;
