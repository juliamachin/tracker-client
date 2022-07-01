import "./MyCalendar.css";
import { useState } from "react";
import Calendar from "react-calendar";

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [range, setRange] = useState(false);
  const [cycle, setCycle] = useState("28");
  console.log(date);

  const cycleLength = parseInt(cycle);

  const addPeriod = () => {
    setRange(true);
  };

  return (
    <div className="calender">
      <h1>Calendar</h1>
      <label for="cycle">Cycle Length : </label>
      <select
        onChange={(event) => setCycle(event.target.value)}
        defaultValue={cycle}
        className="cycle-selection"
      >
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
      </select>
      <div>
        <button onClick={addPeriod}>Add Period</button>
        <Calendar onChange={setDate} value={date} selectRange={range} />
      </div>
      {date.length > 0 ? (
        <p>
          <span>Start:</span> {date[0].toDateString()}
          &nbsp; to &nbsp;
          <span>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p>
          <span>Today's date:</span> {date.toDateString()}
        </p>
      )}
    </div>
  );
};

export default MyCalendar;
