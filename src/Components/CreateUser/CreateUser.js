import "./CreateUser.css";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../api/axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/users/";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);
  const [reEntry, setReEntry] = useState("");
  const [validEntry, setValidEntry] = useState(false);
  const [reEntryFocus, setReEntryFocus] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [valid, setValid] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(username);
    console.log(result);
    console.log(username);
    setValidName(result);
  }, [username]);

  useEffect(() => {
    const result = USER_REGEX.test(password);
    setValidPass(result);
    setValidEntry(password === reEntry);
  }, [password, reEntry]);

  useEffect(() => {
    setErrorMsg("");
  }, [username, password, reEntry]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const v1 = USER_REGEX.test(username);
    // const v2 = PWD_REGEX.test(password);
    // if (!v1 || !v2) {
    //   setErrorMsg("Invalid Entry");
    //   return;
    // }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(JSON.stringify(response?.data));
      setValid(true);
      setUsername("");
      setPassword("");
      setReEntry("");
    } catch (error) {
      if (!error?.response) {
        setErrorMsg("No Server Response");
      } else if (error.response?.status === 409) {
        setErrorMsg("Username Taken");
      } else {
        setErrorMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="create-user">
      <div>
        <p
          ref={errRef}
          className={errorMsg ? "errormsg" : "offscreen"}
          aria-live="assertive"
        >
          {errorMsg}
        </p>
        <h1>Register</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          New Username:
          <FontAwesomeIcon
            icon={faCheck}
            className={validName ? "valid" : "hide"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validName || !username ? "hide" : "invalid"}
          />
          <input
            htmlFor="username"
            type="text"
            className="username"
            ref={userRef}
            autoComplete="off"
            onChange={(event) => setUsername(event.target.value)}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
        </label>
        <br />
        <div>
          <p
            id="uidnote"
            className={
              userFocus && username && !validName ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
        </div>
        <label htmlFor="password">
          Password:
          <FontAwesomeIcon
            icon={faCheck}
            className={validPass ? "valid" : "hide"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validPass || !password ? "hide" : "invalid"}
          />
          <input
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            required
            aria-invalid={validPass ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPassFocus(true)}
            onBlur={() => setPassFocus(false)}
          />
        </label>
        <br />
        <label htmlFor="confirm_pwd">
          Confirm Password:
          <FontAwesomeIcon
            icon={faCheck}
            className={validEntry && reEntry ? "valid" : "hide"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validEntry || !reEntry ? "hide" : "invalid"}
          />
          <input
            type="password"
            className="confirm_pwd"
            onChange={(event) => setReEntry(event.target.value)}
            value={reEntry}
            required
            aria-invalid={validEntry ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setReEntryFocus(true)}
            onBlur={() => setReEntryFocus(false)}
          />
        </label>
        <br />
        <p
          id="confirmnote"
          className={reEntryFocus && !validEntry ? "instructions" : "offscreen"}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Must match the first password input field.
        </p>
        <input
          type="submit"
          disabled={!validName || !validPass || !validEntry ? true : false}
          name="Sign Up"
        />
      </form>
      <p>
        Already registered?
        <br />
        <span className="line">
          <a href="http://localhost:3000/login">Sign In</a>
        </span>
      </p>
    </div>
  );
};

export default CreateUser;
