import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const GreatNews = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  const validateData = () => {
    let validate = email !== "" && phoneNumber != "";

    console.log(validate);
    validate && navigate("/");
  };
  return (
    <div>
      <h1>Great news! your first month's free!</h1>
      <label>
        to get set up, just provide your email and phone numer and we can remind
        you when the free trial ends
      </label>
      <input onBlur={(v) => setEmail(v.target.value)}></input>
      <input onBlur={(v) =>  setPhoneNumber(v.target.value)}></input>
      <Link to="/">
      <a href="#"onClick={validateData} className="btn">SUSCRIBE NOW!</a>
      </Link>
     
      
    </div>



  );
};

export default GreatNews;
