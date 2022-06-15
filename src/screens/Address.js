import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Address = () => {

  const navigate = useNavigate();
  const [streetAdress, setStreetAdress] = useState("");
  const [apt, setApt] = useState("");


  const validateData = () => {
    let validate = streetAdress !== "" && apt != "";

    console.log(validate);
    validate && navigate("/TvPlan");
  };
  return (
    <div>
      <label>
        Pleasure to meet you,Cristian! what is your install Address?
      </label>
      <br></br>
      <legend title="hola">
        <input onBlur={(v) => setStreetAdress(v.target.value)}></input>
      </legend>
      <input onBlur={(v) =>  setApt(v.target.value)}></input>
      <br></br>

      
       <a href="#"onClick={validateData} className="btn">YES!</a>
      
    </div>

    
    
  );
};

export default Address;
