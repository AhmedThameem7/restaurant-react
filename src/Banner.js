import React from "react";
import truck from "./images/trucka.avif";
import "./Banner.css";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
function Banner() {
  return (
    <div>
      <div className="ban">
        <div className="bantext"><h4>ENJOY <br></br>OUR<br></br> DELICIOUS<br></br> MEAL</h4>
        <Link to="/Products">
        <button style={{marginTop:"3rem",width:"100px",backgroundColor:"yellow",fontWeight:"bold",color:'black',border:"none"}}>EXPLORE</button></Link>
        </div>
        <center>
          <motion.img className="lo1" src={truck} 
          initial={{opacity:0,x:200}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1,ease:"easeIn"}}></motion.img>
        </center>
      </div>
    </div>
  );
}
export default Banner;