// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import SignUp from './SignUp';

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const handleLogin = (userData) => {
    // Implement your authentication logic here
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const addToCart = (product) => {
    if (user) {
      setCart([...cart, product]);
    } else {
      // Redirect to login or show a message
      console.log('User must be logged in to add items to the cart');
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div>
        <Header user={user} onLogout={handleLogout} />
        <Switch>
          <Route path="/" exact>
            <ProductList onAddToCart={addToCart} />
          </Route>
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart">
            <Cart cart={cart} onRemoveFromCart={removeFromCart} onClearCart={clearCart} />
          </Route>
          <Route path="/signup">
            <SignUp onSignUp={handleLogin} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

