import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import UserLogin from "./Components/UserLogin/UserLogin";
import CreateUser from "./Components/CreateUser/CreateUser";
import Missing from "./Components/Missing/Missing";
import MyCalendar from "./Components/MyCalendar/MyCalendar";
import Data from "./Components/Data/Data";
import Layout from "./Components/Layout/Layout";
// import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<CreateUser />} />
        {/* <Route element={<RequireAuth allowedRoles={} />}> */}
        <Route path="/mycalendar" element={<MyCalendar />} />
        <Route path="/data" element={<Data />} />
        {/* </Route> */}
        <Route path="*" element={<Missing />} />
      </Routes>
    </main>
  );
}

export default App;
