import { Link } from "react-router-dom";
const Address = () => {
  return (
    <div>
      <label>
        Pleasure to meet you,Cristian! what is your install Address?
      </label>
      <br></br>
      <legend title="hola">
        <input></input>
      </legend>
      <input></input>
      <br></br>

      <Link to="/TvPlan">
        <button>YES!</button>
      </Link>
    </div>
  );
};

export default Address;
