import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nuevo from "../components/nuevo";
import Button from "../components/Inpunt";
const TvSerice = () => {
//   const [age, setAge] = useState(0);
  const navigate = useNavigate();

//   const chanceAge = (action) => {
//     let chance = age;

//     //MODIFICAR FORMA 1
//     action === "PLUS" ? chance++ : chance--;

//     //MODIFICAR FORMA 2
//     if (action === "PLUS") {
//       chance++;
//     } else {
//       chance--;
//     }
//     setAge(chance);
//   };

  return (
    <div>
      <h1>The Best TV service around!</h1>
      <p>Are you ready to enjoy ultra-best service?</p>
      {/* <p>{age}</p>
      {age > 5 && <p>Estas viejo</p>} */}
      {/* <button onClick={() => chanceAge("PLUS")}>+</button>
      <button onClick={() => chanceAge("LESS")}>-</button>
      <button onClick={() => navigate("/Awesome")}>next</button> */}
      {/* <Nuevo /> */}

      <Link to="/Awesome">
        <button>LET'S DO IT!</button>
      </Link>
    </div>
  );
};

export default TvSerice;
