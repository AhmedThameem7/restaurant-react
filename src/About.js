import React from "react";
import "./About.css";
import cartabt from "./images/cartabt.webp";
import {motion} from 'framer-motion';
function About() {
  return (
    <div className="abtcontainer">
      <h1 className="abth">About Us</h1>
      <div className="abtgrid">
        <div className="abtcont">
          <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}>
          <h2 className="abt1">Welcome to The Spicy Meal!</h2>

          <p className="abtp">
            At The Spicy Meal, we’re all about bringing you mouth-watering
            flavors that make your taste buds dance. We’re a small, local food
            cart on a big mission: to create delicious, made-from-scratch meals
            that you can enjoy on the go. From fresh ingredients to bold spices,
            every dish we serve is crafted with love, passion, and a whole lot
            of care.
          </p>
          </motion.div>
          <motion.div 
          initial={{opacity:0,x:100}}
          animate={{opacity:1,x:0}}
          transition={{duration:1,ease:"easeIn"}}>
          <h2 className="abt1">Our Story</h2>

          <p className="abtp">
            What started as a dream to share our love for specific cuisine or
            type of food you serve with the world, has now become a community
            favorite. Whether you’re stopping by for a quick bite during lunch
            or grabbing dinner after a long day, we want to make sure you leave
            with a smile on your face and a full stomach. Our food cart is all
            about local ingredients, unique recipes, friendly service,
            eco-conscious practices, etc. We believe in the power of food to
            bring people together.
          </p>
          </motion.div>
        </div>
        <motion.div
        initial={{opacity:0,y:-100}}
        animate={{opacity:1,y:0}}
        transition={{duration:1,ease:"easeOut"}}>
          <center>
            <img className="abtimg" src={cartabt}></img>
          </center>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
