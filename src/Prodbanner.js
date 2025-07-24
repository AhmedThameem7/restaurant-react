import './Products.css'
import React from 'react'
import {useContext} from 'react'
import {motion} from 'framer-motion';
import wrap from "./images/wrap.jpg";
import nuggets from "./images/nuggets.jpg";
import burger from "./images/burger.jpg";
import fried from "./images/fried.jpg";
import fries from "./images/fries.jpg";
import hotdog from "./images/hotdog.jpg";
import chia from "./images/chia oatmeal.jpg";
import {CartContext} from './CartContext';
import macarons from "./images/macarons.jpg";
import icecream from "./images/ice cream.jpg";
function Prodbanner() {
  const { addToCart } = useContext(CartContext);
  const product=[
    {id:1,src:burger,price:"Rs.98/-",des:'Burger'},
    {id:2,src:nuggets,price:"Rs.109/-",des:'Nuggets'},
    {id:3,src:wrap,price:"Rs.87/-",des:'Chicken Wrap'},
    {id:4,src:fries,price:"Rs.99/-",des:'Fries'},
    {id:5,src:fried,price:"Rs.209/-",des:'Fried Chicken'},
    {id:6,src:hotdog,price:"Rs.99/-",des:'Hotdog'},
    {id:7,src:chia,price:"Rs.109/-",des:'Chia Oatmeal'},
    {id:8,src:macarons,price:"Rs.99/-",des:'Macarons'},
    {id:9,src:icecream,price:"Rs.49/-",des:'Ice Cream'}
  ]
  return (
    <div>
    <motion.div className='products-banner'
    initial={{opacity:0,x:100}}
    animate={{opacity:1,x:0}}
    transition={{duration:1,ease:"easeIn"}}>
      {product.map((item) => (
        <div className='product-card' key={item.id}>
          <img src={item.src} />
          <h3>{item.des}</h3>
          <h5>{item.price}</h5>
          <button className="addcart" onClick={() => addToCart(item)}>Add to cart</button>
        </div>
      ))}
    </motion.div>
  </div>
  )
}

export default Prodbanner
