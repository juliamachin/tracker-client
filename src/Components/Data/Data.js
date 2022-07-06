import "./Data.css";
import { useState } from "react";
import Calendar from "react-calendar";
import Moment from "react-moment";
import Links from "../Links/Links";
import Switch from "react-switch";
import { Form } from "reactstrap";

const Data = () => {
  const [checked, setChecked] = useState(false);

  const toggle = (value) => {
    return !value;
  };

  return (
    <div className="data-container">
      <Links />
      <Moment format="MMMM Do, YYYY"></Moment>
      <Form>
        <label>Temperature</label>
        <br />
        <input className="temp" type="number" defaultValue="98.3" />
        <span>°F</span>
        <br />
        <label>Cervical Mucus</label>
        <br />
        <select>
          <option value="none">None</option>
          <option value="sticky">Sticky</option>
          <option value="creamy">Creamy</option>
          <option value="egg_white">Egg White</option>
          <option value="watery">Watery</option>
        </select>
        <br />
        <label>WooHoo?</label>
        <br />
        <select>
          <option value="none">None</option>
          <option value="protected">Protected</option>
          <option value="unprotected">Unprotected</option>
          <option value="insemination">Insemination</option>
          <option value="withdrawal">Withdrawal</option>
        </select>
        <br />
        <label>Menstruation</label>
        <br />
        <label>Light</label>
        <input type="checkbox" value="" />
        <label>Medium</label>
        <input type="checkbox" value="" />
        <label>Heavy</label>
        <input type="checkbox" value="" />
        <div className="toggle">
          <label>Spotting</label>
          <Switch onChange={() => setChecked(toggle)} checked={checked} />
        </div>
        <label>Symptoms</label>
        <select>
          <option value="">Acne</option>
          <option value="">Bloating</option>
          <option value="">Breast pain</option>
          <option value="">Bowel movement pain</option>
          <option value="">Bowel movement pain</option>
          <option value="">Coughing</option>
          <option value="">Cramps</option>
          <option value="">Diarrhea</option>
          <option value="">Muscle pain</option>
          <option value="">Mood</option>
          <option value="">Nausea</option>
          <option value="">Pelvic pain</option>
          <option value="">Stomach ache</option>
          <option value="">Trouble sleeping</option>
          <option value="">Vomiting</option>
        </select>
        <br />
        <button>Add</button>
        <br />
        <label>Journal</label>
        <input type="textbox" />
      </Form>
      <button>Save</button>
    </div>
  );
};

export default Data;
