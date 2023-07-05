import {Link} from 'react-router-dom'

function Carrinho() {
  return (
    <div className="carrinho">
      <header>
        <div>
          <h1>carrinho</h1>
        </div>
          <Link to={'/'}>Home</Link> <br/>
          <Link to={'/Contato'}>Contato</Link> <br/>
          <Link to={'/Sobre'}>Sobre</Link> <br/>
      </header>


    </div>
  );
}
export default Carrinho;