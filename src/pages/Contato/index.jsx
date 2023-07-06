import {Link} from 'react-router-dom'

function Contato() {
  return (
    <div className="contato">
      <header>
        <div>
          <h1>contato</h1>
        </div>
          <ul>
              <li><Link to={'/'}>Home</Link> </li>
              <li><Link to={'/Carrinho'}>Carrinho</Link> </li>
              <li><Link to={'/Sobre'}>Sobre</Link> </li>
          </ul>
      </header>


    </div>
  );
}
export default Contato;