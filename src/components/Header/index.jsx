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
          <ul className='lista-rotas'>
              <Link className="sair-rotas" to="/">SAIR</Link>
              <Link className="home-rotas" aria-current="page" to="/Home">INICIO</Link>
              <Link className="carrinho-rotas" to="/Carrinho">CARRINHO</Link>
              
            </ul>
          </div>
      </nav>
  </header>
)}
      