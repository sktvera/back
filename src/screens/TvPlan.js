import { Link } from "react-router-dom";
const TvPlan = () => {
  return (
    <div className="grilla">
      <div>
      <p>Please select the Tv plan you wnat to enjoy:</p>
      </div>
      
      <div>
      <input></input>
        </div>

        <div>
        <input></input>
        </div>
      

      <div className="btns">
      <Link to="/GreatNews">
        <a href="#" className="btn">I AM READY</a>
      </Link>
      </div>

      <div>
        <label className="label_down">
          STEP 3 OF 4
        </label>
      </div>
      
    </div>
  );
};

export default TvPlan;
