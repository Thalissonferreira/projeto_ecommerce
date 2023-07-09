import {Link} from 'react-router-dom'
import "./header.modules.css"
export default function Header(){
return (
    <header>
    <nav className="header">
      <div className="logo">
        <Link className="titulo-logo" to="/Home">
            <img className="logo-ecommerce" src="/logo.png" alt="logo"/>
        </Link>
      </div>
          <div >
            <div className="navbar-nav">
              <ol>
              <Link className="nav-link active" aria-current="page" to="/Home">Inicio</Link>
              <Link className="nav-link" to="/Carrinho">Carrinho</Link>
              //<Link className="nav-link" to="/">Sair</Link>
              </ol>
            </div>
          </div>
      </nav>
  </header>
)}
      