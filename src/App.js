import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin/UserLogin";
import CreateUser from "./Components/CreateUser/CreateUser";
import MyCalendar from "./Components/MyCalendar/MyCalendar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/newuser" element={<CreateUser />} />
        <Route path="/mycalendar" element={<MyCalendar />} />
      </Routes>
    </div>
  );
}

export default App;
