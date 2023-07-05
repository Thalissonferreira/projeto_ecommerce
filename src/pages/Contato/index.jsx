import {Link} from 'react-router-dom'

function Contato() {
  return (
    <div className="contato">
      <header>
        <div>
          <h1>contato</h1>
        </div>
          <Link to={'/'}>Home</Link> <br/>
          <Link to={'/Carrinho'}>Carrinho</Link> <br/>
          <Link to={'/Sobre'}>Sobre</Link> <br/>
      </header>


    </div>
  );
}
export default Contato;