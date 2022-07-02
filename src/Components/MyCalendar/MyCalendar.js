import "./MyCalendar.css";
import { useState } from "react";
import Calendar from "react-calendar";
import Moment from "react-moment";

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
          <span>Selected date:</span> {date.toDateString()}
        </p>
      )}
      <form>
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
      </form>
      <div className="col-md-3 m-3 box ">
        <p>Next Period</p>

        <Moment format="Do MMMM YYYY" add={{ days: cycleLength - 1 }}>
          {date}
        </Moment>
      </div>
      <div className="col-md-3 m-3 box ">
        <p> Approximate Ovulation Day</p>

        <Moment format="Do MMMM YYYY" add={{ days: cycleLength - 1 - 14 }}>
          {date}
        </Moment>
      </div>
    </div>
  );
};

export default MyCalendar;
