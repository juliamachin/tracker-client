import './App.css';
import { Routes, Route } from "react-router-dom";
import UserLogin from './Components/UserLogin/UserLogin';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<UserLogin />} />
      </Routes>
    </div>
  );
}

export default App;
