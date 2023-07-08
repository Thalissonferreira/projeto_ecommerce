import {Link} from 'react-router-dom'

export default function Heade(){
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

      </nav>
  </header>
)}
      