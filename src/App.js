import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom'
import Router from './routers/router';
import './App.css';

//Components
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    
    if (cart) {
      const cartItems = JSON.parse(cart);
      const totalCount = cartItems.reduce((total, item) => total + item.quantidade, 0);
      setCartCount(totalCount);
    }
  }, []); 


  return (
    <BrowserRouter>
      <Header cartCount={cartCount}/>
      <Router />
      <Footer />
    </BrowserRouter>
  );
}
export default App;
