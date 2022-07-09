import { Link } from "react-router-dom";
const TvPlan = () => {
  return (
    <div className="grilla">
      <div>
      <p>Please select the Tv plan you wnat to enjoy:</p>
      </div>
      
      
      <div className="container1 cont">
          <p>Premium</p>
          <label>Service</label>
          <p>50</p>
        <input type="checkbox"></input>
        </div>

        <div className="container2 cont" >
          <p>Basic</p>
          <label>Service</label>
          <p>30</p>
        <input type="checkbox"></input>
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
