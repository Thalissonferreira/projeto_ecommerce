import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Router from './routers/router';
import './App.css';
import Layout from './layout';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
export default App;
