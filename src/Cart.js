// Cart.js

import React from 'react';

const Cart = ({ cart, onRemoveFromCart, onClearCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => onRemoveFromCart(product.id)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, product) => total + product.price, 0)}</p>
      <button onClick={onClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
