import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';
import cart from './images/cart.png';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const getTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      const num = parseInt(item.price.slice(3, -2)); // e.g., Rs.98/- -> 98
      total += num;
    });
    return total;
  };

  return (
    <div style={{ minHeight: "80vh", marginTop: "100px" }}>
      <h1 className='crt'>YOUR CART <img style={{ height: "80px" }} src={cart} /></h1>
      {cartItems.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>Cart is empty</h3>
      ) : (
        <div className="cart-container">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.src} alt={item.des} width="100" />
              <div className='prodcartvalue'>
                <h3>{item.des}</h3>
                <p>{item.price}</p>
                <button className='removebtn' onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
          <h2>Total: Rs.{getTotal()}/-</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
