import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin/UserLogin";
import CreateUser from "./Components/CreateUser/CreateUser";
import MyCalendar from "./Components/MyCalendar/MyCalendar";
import Data from "./Components/Data/Data";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/newuser" element={<CreateUser />} />
        <Route path="/mycalendar" element={<MyCalendar />} />
        <Route path="/adddata" element={<Data />} />
      </Routes>
    </div>
  );
}

export default App;
