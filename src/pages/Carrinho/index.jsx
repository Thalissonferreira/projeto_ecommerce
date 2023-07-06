import{BrowserRouter} from 'react-router-dom'
import Header from "../../components/Header";

<BrowserRouter>
  <Header/>
</BrowserRouter>

function Carrinho() {
  return (
    <div className="carrinho">
      <header>
        <Header/>
        <div>
          <h1>Carrinho</h1>
        </div>
      </header>


    </div>
  );
}
export default Carrinho;