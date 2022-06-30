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
const REGISTER_URL = "/register";

const CreateUser = () => {
  const [newUser, setNewUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [newPassword, setNewPassword] = useState("");
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
    const result = USER_REGEX.test(newUser);
    console.log(result);
    console.log(newUser);
    setValidName(result);
  }, [newUser]);

  useEffect(() => {
    const result = USER_REGEX.test(newPassword);
    console.log(result);
    console.log(newPassword);
    setValidPass(result);
    const match = newPassword === reEntry;
    setValidEntry(reEntry);
  }, [newPassword, reEntry]);

  useEffect(() => {
    setErrorMsg("");
  }, [newUser, newPassword, reEntry]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const v1 = USER_REGEX.test(newUser);
    const v2 = PWD_REGEX.test(newPassword);
    if (!v1 || !v2) {
      setErrorMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ newUser, newPassword }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(JSON.stringify(response?.data));
      setValid(true);
      setNewUser("");
      setNewPassword("");
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
      <form>
        <label>
          New Username:
          <FontAwesomeIcon
            icon={faCheck}
            className={validName ? "valid" : "hide"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validName || !newUser ? "hide" : "invalid"}
          />
          <input
            htmlFor="username"
            type="text"
            className="username"
            ref={userRef}
            autoComplete="off"
            onChange={(event) => setNewUser(event.target.value)}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
        </label>
        <div>
          <p
            id="uidnote"
            className={
              userFocus && newUser && !validName ? "instructions" : "offscreen"
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
            className={validPass || !newPassword ? "hide" : "invalid"}
          />
          <input
            type="password"
            id="password"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
            required
            aria-invalid={validPass ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPassFocus(true)}
            onBlur={() => setPassFocus(false)}
          />
        </label>
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
        </label>
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
    </div>
  );
};

export default CreateUser;
