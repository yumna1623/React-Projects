import React from "react";

const Cart = ({ cartItems, removeFromCart, IncrementQty, DecrementQty }) => {
  return (
    <>
      <h2> Cart</h2> 
      <ul>
        {cartItems.length === 0
          ? "No items in Cart"
          : cartItems.map((item, index) => {
              return (
                <>
                <li key={index}>
                  {item.name} - {item.price} x {item.quantity} = {item.price * item.quantity}
                  <button onClick={() => IncrementQty(item.id)}>+</button>  
                  <button onClick={() => DecrementQty(item.id)}>-</button>  
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove from Cart
                  </button>
                </li>
                <br/>
                {/* <button onClick={()=>{Total}}></button> */}
                </>

                
              );
            })}
      </ul>
    </>
  );
};

export default Cart;
