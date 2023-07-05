import {Link} from 'react-router-dom'

function sobre() {

  return (
    <div className="sobre">
      <header>
        <div>
          <h1> sobre</h1>
        </div>
          <Link to={'/'}>Home</Link> <br/>
          <Link to={'/Carrinho'}>Carrinho</Link> <br/>
          <Link to={'/Sobre'}>Sobre</Link> <br/>
      </header>


    </div>
  );
}
export default sobre;