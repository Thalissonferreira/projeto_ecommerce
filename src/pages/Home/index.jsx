import React,{useState, useEffect} from "react";
import  { Link } from 'react-router-dom';
import "./home.modules.css";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function loadApi(){
      const res = await fetch('https://infracode-api.onrender.com/produtos');
      const json = await res.json();
      
      setProducts(json);
      
    };

    loadApi();
  },[])

  const options = {style: "currency", currency: "BRL"};

  return (
    <>
      <div className="products-banner">
        <img className="banner" src="/download.jpeg" alt="" />
      </div>

      <div className="products-container">
        <h2>Novidades</h2>  

        <div className="products-container__wrapper">
          {products.map((item)=>{
            return(
              <article key={item.id} className="products-item">
                <img src={item.imagens[0].url} alt={item.nome}/>
                <h3>{item.nome}</h3>
                <span>{item.preco.toLocaleString("pt-BR", options)}</span>
                <Link to={`/produto/${item.id}`}>Ver Produto</Link>

              </article>
            )

          })}
        </div>
      </div>
    </>
  );
}

export default Home;
