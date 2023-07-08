import React,{useState, useEffect} from "react";
//import{BsFillCartPlusFill, BsFillCartDashFill} from 'react-icons/bs'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "./home.modules.css"




 

function Home() {
  const [produto, setProduto] = useState([]);
  const[cart, setCart]= useState([]);
  useEffect(() => {
    function loadApi(){
      const url = "https://infracode-api.onrender.com/produtos";

      fetch (url).then((Response) => Response.json()).then((objeto) => {
       setProduto(objeto);
      }).catch((err) => {
        console.error(err)
      })
    };

    loadApi();
  },[])

  return (
       <div className="conteiner">
       <Header/>
        <header>
        <h1>pagina ecommerce</h1>
      </header>
      {produto.map((item)=>{
        return(
          <article key={item.id} className="produto">
            <h2>{item.nome}</h2>
            <img width={"200px"} src={item.imagens[0].url} alt={item.nome}/>
            <button>            
            <Link className="Imagem 1" to={`/Produto/${item.id} `}> Ver produto</Link>
            </button>
          </article>
        )

      })}
           <Footer/>
      </div>
 
  );
}



export default Home;
