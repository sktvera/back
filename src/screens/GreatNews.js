import { Link } from "react-router-dom";
const GreatNews = () => {
  return (
    <div>
      <h1>Great news! your first month's free!</h1>
      <label>
        to get set up, just provide your email and phone numer and we can remind
        you when the free trial ends
      </label>
      <input></input>
      <input></input>
      <Link to="/">
        <button>SUSCRIBE NOW!</button>
      </Link>
    </div>
  );
};

export default GreatNews;
