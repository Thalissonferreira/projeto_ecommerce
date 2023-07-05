import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom'

function Home() {
  const [produto, setProduto] = useState([]);
  useEffect(() => {
    function loadApi(){
      const url = "https://infracode-api.onrender.com/produtos";

      fetch(url).then((Response) => Response.json()).then((objeto) => {
       setProduto(objeto);
      }).catch((err) => {
        console.error(err)
      })
    };

    loadApi();
  },[])

  return (
    <div className="conteiner">
      <header>
        <h1>pagina ecommerce</h1>
        <div>
          <Link to={'/Carrinho'}>Carrinho</Link> <br/>
          <Link to={'/Contato'}>Contato</Link> <br/>
          <Link to={'/Sobre'}>Sobre</Link> <br/>
        </div>
      </header>
      {produto.map((item)=>{
        return(
          <article key={item.id} className="produto">
            <h2>{item.nome}</h2>
            <img src={item.imagens} alt={item.nome}/>
            <button>{item.preco}</button>

          </article>
        )

      })}
      </div>
  );
}

export default Home;
