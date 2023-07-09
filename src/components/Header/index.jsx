import {Link} from 'react-router-dom'
import "./header.modules.css"
export default function Header(){
return (
    <header>
    <nav className="headerr">
      <div className="logo">
        <Link className="titulo-logo" to="/Home">
            <img className="logo-ecommerce" src="/logo.png" alt="logo"/>
        </Link>
      </div>
          <div >
            <div className="navbar-nav">

              <Link className="nav-link active" aria-current="page" to="/Home">Inicio</Link>
              </div>
              <div className="navbar-nav">
              <Link className="nav-link" to="/Carrinho">Carrinho</Link>
              </div>
              <div className="navbar-nav">
              <Link className="nav-link" to="/">Sair</Link>
            
            </div>
          </div>
      </nav>
  </header>
)}
      