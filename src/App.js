import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin/UserLogin";
import CreateUser from "./Components/CreateUser/CreateUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/newuser" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
