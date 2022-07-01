import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin/UserLogin";
import CreateUser from "./Components/CreateUser/CreateUser";
import MyCalendar from "./Components/MyCalendar/MyCalendar";
import Data from "./Components/Data/Data";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/newuser" element={<CreateUser />} />
      </Routes>
      <Nav />
      <Routes>
        <Route path="/mycalendar" element={<MyCalendar />} />
        <Route path="/data" element={<Data />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
