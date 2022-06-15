import { Link } from "react-router-dom";
const TvPlan = () => {
  return (
    <div>
      <h1>Please select the Tv plan you wnat to enjoy:</h1>
      <input></input>
      <input></input>
      <Link to="/GreatNews">
        <a href="#" className="btn">I AM READY</a>
      </Link>
    </div>
  );
};

export default TvPlan;
