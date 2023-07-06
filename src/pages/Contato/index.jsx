import{BrowserRouter} from 'react-router-dom'
import Header from "../../components/Header";

<BrowserRouter>
  <Header/>
</BrowserRouter>

function Contato() {
  return (
    <div className="contato">
      <header>
        <Header/>
        <div>
          <h1>contato</h1>
        </div>

      </header>


    </div>
  );
}
export default Contato;