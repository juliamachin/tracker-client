import "./MyCalendar.css";
import { useState } from "react";
import Calendar from "react-calendar";

const MyCalendar = () => {
  const [date, setDate] = useState();
  return (
    <div className="calender">
      <h1>Calendar Page</h1>
      <div>
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
};

export default MyCalendar;
