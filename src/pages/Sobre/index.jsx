import{BrowserRouter} from 'react-router-dom'
import Header from "../../components/Header";

<BrowserRouter>
  <Header/>
</BrowserRouter>


function sobre() {

  return (
    <div className="sobre">
      <header>
        <Header/>
        <div>
          <h1> sobre</h1>
        </div>

      </header>


    </div>
  );
}
export default sobre;