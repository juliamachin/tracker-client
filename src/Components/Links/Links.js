import "./Links.css";
import { Navbar } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import AuthContext from "../context/AuthProvider";

const Links = () => {
  // const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    // setAuth({});
    navigate("/login");
  };
  return (
    <Navbar className="navigation">
      <button onClick={logout}>Sign Out</button>
      <div className="icons">
        <a href="/data"><img src="./Notes.png" className="icon" alt="data"/></a>
        <a href="/mycalendar"><img src="./Calendar.png" className="icon" alt="Calendar"/></a>
      </div>
    </Navbar>
  );
};

export default Links;
