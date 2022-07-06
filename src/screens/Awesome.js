import { useState } from "react";
//REACT ROUTER DOM
import { Link, useNavigate } from "react-router-dom";

//validaciones de formularios
  const Awesome = () => {
      const navigate = useNavigate();
      const [name, setName] = useState("");
      const [lastName, setLastName] = useState("");

      const validateData = () => {
       let validate = name !== "" && lastName != "";

      console.log(validate);
      validate && navigate("/Address");
    };

       return (
       <div className="grilla">
        <div>
            <p>Awesome! Let's get started with the basics.</p>
        </div>

          <div className="box">
          
             
     
              <input className="input_select" onBlur={(v) => setName(v.target.value)}></input>
      
          </div>
      
      <div className="inputs">
          <input className="input_select"placeholder="LAST NAME" onBlur={(v) => setLastName(v.target.value)}></input>
      </div>
      
      <div className="btns">
          <a href="#"onClick={validateData} className="btn">NEXT</a>
      </div>

      <div>
        <label className="label_down">
          STEP 1 OF 4
        </label>
      </div>
      
    </div>
  );
};

export default Awesome;
