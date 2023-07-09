import React, { useState } from "react";
import { getItem, setItem } from "../services/LocalStoragefuncs";
import{BsFillCartDashFill} from 'react-icons/bs'
 const Carrinho =() =>{
  const [objet, setObjet] = useState( getItem('carrinhoYT') || []);
  const excluirItem = (objeto) => {
    const arrFilter = objet.filter((item) => item.id !== objeto.id)
    setObjet(arrFilter)
    setItem('carrinhoYT',arrFilter)
  }
  return(
    <div>
      <h1>Carrinho</h1>
        <div>
          {
            objet.map((item) => (
            <div key={ item.id}>
              {item.imagens.map((item) => {
            return(
              <img width ={200 } height={150} src={item.url} alt={item.nome} />
              )
              }) 
            }
            <button>{item.preco}</button>
                <h4>{item.nome}</h4>
            <button onClick={()=> excluirItem(item)}>
              <BsFillCartDashFill/>
            </button>
              </div>
            ))
            }
            </div>
        </div>
  )
}


export default Carrinho;