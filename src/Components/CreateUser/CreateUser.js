import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from './api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const CreateUser = () => {
    const [newUser, setNewUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)
    const [newPassword, setNewPassword] = useState('')
    const [validPass, setValidPass] = useState(false)
    const [passFocus, setPassFocus] = useState(false)
    const [reEntry, setReEntry] = useState('')
    const [validEntry, setValidEntry] = useState(false)
    const [reEntryFocus, setReEntryFocus] = useState(false)

    
    const userRef = useRef()
    const errRef = useRef()

  return (
  <div>
    <h1>Register</h1>
<form>
<label>New Username:
<FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
<FontAwesomeIcon icon={faTimes} className={validName || !newUser ? "hide" : "invalid"} />
    <input type='text' className='username' ref={userRef} autoComplete='off' value={newUsername} required aria-invalid={validName ? 'false' : 'true'} aria-describedby='uidnote' onFocus={() => setUserFocus} onBlur={() => setUserFocus(false)} />
</label>
</form>
  </div>
  );
};

export default CreateUser;
