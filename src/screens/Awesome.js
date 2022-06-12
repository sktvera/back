import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <div>
      <label>Awesome! let's get started with the basics.</label>
      <br></br>
      <input onBlur={(v) => setName(v.target.value)}></input>
      <br></br>
      <input onBlur={(v) => setLastName(v.target.value)}></input>
      <br></br>
      <button onClick={validateData}>NEXT</button>
    </div>
  );
};

export default Awesome;
