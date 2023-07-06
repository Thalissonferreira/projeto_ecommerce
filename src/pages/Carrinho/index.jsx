import {Link} from 'react-router-dom'

function Carrinho() {
  return (
    <div className="carrinho">
      <header>
        <div>
          <h1>carrinho</h1>
        </div>
        <ul>
           <li> <Link to={'/'}>Home</Link> </li>
            <li><Link to={'/Contato'}>Contato</Link></li>
            <li><Link to={'/Sobre'}>Sobre</Link></li>
        </ul>
      </header>


    </div>
  );
}
export default Carrinho;