import {Link} from 'react-router-dom'

export default function Header(){
return (
    <div className="conteiner">
      <header>
        <ul>  
            <li>
                <Link to={'/Home'}>Home</Link><br/> 
            </li> 
            <li>
                <Link to={'/Carrinho'}>Carrinho</Link><br/> 
            </li> 
            <li>
                <Link to={'/Contato'}>Contato</Link> <br/>
            </li>       
            <li>
            <   Link to={'/Sobre'}>Sobre</Link><br/>
            </li>
             <li>
             <Link to={'/'}>sair</Link>
             </li>
        </ul>
      </header>
      </div>)}
      