import{BrowserRouter} from 'react-router-dom'
import React from 'react';
import Header from './components/Header';
import Rotas from './pages/routes';

function App() {
  return (    
  <BrowserRouter>
    <Rotas/>
  </BrowserRouter>

  );
}
export default App;
