import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin/UserLogin";
import CreateUser from "./Components/CreateUser/CreateUser";
import Calendar from "./Components/Calendar/Calendar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/newuser" element={<CreateUser />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
