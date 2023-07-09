import React,{useState, useEffect} from "react";
import{BsFillCartPlusFill, BsFillCartCheckFill} from 'react-icons/bs'
import { Link } from "react-router-dom";
import "./home.modules.css"
import Header from "../../components/Header";
import { getItem, setItem } from "../services/LocalStoragefuncs";

function Home() {
  const [produto, setProduto] = useState([]);
  const [ cart, setCart] = useState( getItem('carrinhoYT') ||[]);

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

  const handleClick = (objeto) => {
    const element = cart.find((item) => item.id === objeto.id)
    if(element) {
      const arrFilter =cart.filter((item) => item.id !== objeto.id)
      setCart(arrFilter)
      setItem('carrinhoYT', arrFilter)
    } else{
      setCart([...cart, objeto])
      setItem('carrinhoYT', [...cart, objeto])
    }
  }

return (
  
  <div className="products-container">
         
        <header>
        <Header/> 
          <h1>Novidades</h1>
        < h3>Clique em algum produto abaixo para mais informações!</h3>
        </header>
      <div className="products-container__wrapper">
      {produto.map((item)=>{
        return(
        <>
        <section key={item.id} className="products-item">
          <h2>Novidades</h2>  
            <div className="products-banner">
              <img className="banner" src={item.imagens[0].url} alt={item.nome} />
            </div>
              <h4>{item.nome}</h4>
        <button
          onClick={() =>  handleClick(item)}>
          {
            cart.some((itemCart) => itemCart.id === item.id)? (
              <BsFillCartCheckFill/>
                ) :(
                  <BsFillCartPlusFill/>
                )

          }
        </button>
        </section>

        </>
        
        )
      })}
      </div>

      </div>
  );
}



export default Home;