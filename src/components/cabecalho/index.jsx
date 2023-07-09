import {Link} from 'react-router-dom'

export default function Heade(){
return (
    <header>
    <nav className="navbar">
      <div className="logo">
        <Link className="titulo-logo" to="/Home">
            <img id="logo-ecommerce" src="/logo.png" alt="logo"/>
        </Link>
      </div>
      </nav>
  </header>
)}
      