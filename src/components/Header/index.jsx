import {Link} from 'react-router-dom'
import "./header.modules.css"
export default function Header(){
return (
    <header>
    <nav className="navbar navbar-expand-lg ">
      <div className="logo">
        <Link className="titulo-logo" to="/Home">
            <img id="logo-ecommerce" src="/logo.png" alt="logo"/>
        </Link>
      </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><img width="30" height="30" src="../image/nav-cardapio.png" alt="menu--v1"/>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/Home">Inicio</Link>
              <Link className="nav-link" to="/Carrinho">Carrinho</Link>
              //<Link className="nav-link" to="/">Sair</Link>
            </div>
          </div>
      </nav>
  </header>
)}
      