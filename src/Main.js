import React from "react";
import Banner from "./Banner";
import {motion} from 'framer-motion'
import "@fontsource/montserrat/400.css";
import slide from './images/slide.webp';
import "./App.css";
function Main() {
  return (
    <div className="bg">
      <motion.h2
        className="hea1"
        initial={{ opacity: 0, scale:0.5,rotate:10}} 
        animate={{ opacity: 1, scale: 1 ,rotate:0}} 
        transition={{ duration: 1, ease: "easeIn" }} 
      >
        FEEL THE TASTE IN EVERY BITE!
      </motion.h2>
      <Banner />
      <h2 className="hea1">CLASSIC INGREDIENTS</h2>
      <motion.div className="mainimgcon"
      initial={{opacity:0,x:100}}
      whileInView={{opacity:1,x:0}}
      transition={{duration:1,ease:"easeInOut"}}
      >
        <div className="mig1"><h4 className="migco">Quality <br/>Meats </h4></div>
        <div className="mig2"><h4 className="migco">Fresh<br/>Breads </h4></div>
        <div className="mig3"><h4 className="migco">Fresh <br/>Vegetables </h4></div>
      </motion.div>
      <div className="main-bor">
        <motion.img className="sliimg" src={slide}
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,ease:"easeIn"}}
        ></motion.img>
        <div>
          <h3 className="slih">Discover Our Menus</h3>
          <p className="slip">At the heart of our kitchen is a passion for creating unforgettable dining experiences. Our menus are designed to celebrate fresh, locally sourced ingredients and bold, satisfying flavors. Whether you’re stopping by for a casual bite or planning a special night out, you'll find a variety of options to suit your taste.</p>
          <h3 className="slih">Something for Everyone</h3>
          <p className="slip">We believe great food brings people together. That's why our menus include a wide range of dishes, from comforting classics to inspired seasonal creations. Vegetarian, vegan, and gluten-free options are always available, so everyone at your table can find something delicious to enjoy.</p>
          <h3 className="slih">Crafted With Care</h3>
          <p className="slip">Every item on our menu is thoughtfully prepared by our team of talented chefs, who blend creativity with tradition to bring you meals that are as visually stunning as they are flavorful. From our carefully curated starters to our handcrafted desserts, quality and care are the foundation of everything we serve.</p>
        </div>
      </div>
      <h2 className="hea1">QUALITY FOODS IN AFFORDABLE PRICES</h2>
    </div>
  );
}

export default Main;
