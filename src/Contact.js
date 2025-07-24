import React from "react";
import "./Contact.css";
import cntimg from "./images/cntimg.png";
import {motion} from 'framer-motion';
function Contact() {
  return (
    <div>
      <h2 className="cnt-h">Contact Us</h2>
      <div className="cntgrid">
        <motion.div className="cntform"
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        transition={{duration:1,ease:"easeIn"}}>
          <form className="form">
            <label className="lab">Name :</label>
            <input
              className="inp-cnt"
              type="text"
              placeholder="Enter your name"
            ></input>
            <label className="lab">Email :</label>
            <input
              className="inp-cnt"
              type="email"
              placeholder="Enter your Email"
            ></input>
            <label className="lab">Message :</label>
            <textarea
              className="txtarea"
              placeholder="Leave your Message"
            ></textarea>
            <button className="btn-sbmt">Submit</button>
          </form>
        </motion.div>
        <motion.div 
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        transition={{duration:1,ease:"easeIn"}}>
          <img src={cntimg} className="cntimg"></img>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
