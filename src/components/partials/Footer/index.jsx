import { Link } from 'react-router-dom'
import './footer.modules.css'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <img className='footer-img' src="/logo.png" alt="InfraCode Store" />
        <p>A forma mais fácil de repor seu estoque!</p>  

        <div className="footer-container__wrapper">
          <div>
            <h3>Sobre a InfraCode</h3>
            <span>Quem somos</span>
            <span>Regras de uso</span>
            <span>Política de Privacidade</span>
            <span>Política de cookies</span>
          </div>
          <div>
            <h3>Suporte</h3>
            <span>Primeiro Acesso</span>
            <span>Trocas e Devoluções</span>
            <span>Garantia do Produto</span>
          </div>
          <div>
            <h3>Como comprar</h3>
            <span>Das 09h às 18h</span>
            <span>+ 55 (11) 99776-8467</span>
            <span>sac@infracodestore.com.br</span>
          </div>
        </div>

        <div className='copyright'>
          <p>&copy; 2023 InfraCode Lab - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;