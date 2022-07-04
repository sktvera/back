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
    <div className="grilla">
      <div></div>
      <div>
      <p>
        Pleasure to meet you,Cristian! 
        <div>
        what is your install Address?
        </div>
       
      </p>
      </div>
     
      
      <div className="inputs">
      <input placeholder="STREET ADDRESS, CITY, STATE" onBlur={(v) => setStreetAdress(v.target.value)}></input>
      </div>
       
      <div className="inputs">
      <input placeholder="APT#" onBlur={(v) =>  setApt(v.target.value)}></input>
      </div>

      <div>
        <p>I can't find my Address</p>
      </div>
      
     

      <div className="btns">
      <a href="#"onClick={validateData} className="btn">YES!</a>
      </div>

      <div>
        <label className="label_down">
          STEP 2 OF 4
        </label>
      </div>

      <div></div>
      
      
    </div>

    
    
  );
};

export default Address;
