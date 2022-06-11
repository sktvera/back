import { Link} from "react-router-dom";
import Nuevo from "../components/nuevo";
import Button from "../components/Inpunt";
const TvSerice = ()=>{
    return(<div>
<h1>The Best TV service around!</h1>
<p>Are you ready to enjoy ultra-best service?</p>

<Nuevo/>

<Link to="/Awesome"><button>LET'S DO IT!</button></Link>
    </div>)
}

export default TvSerice;