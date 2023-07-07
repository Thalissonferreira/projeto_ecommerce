import React from 'react';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';

function Layout({ children, cartCount }) {
  return (
    <>
        <Header cartCount={cartCount}/>
        { children }
        <Footer />
    </>
  );
}
export default Layout;