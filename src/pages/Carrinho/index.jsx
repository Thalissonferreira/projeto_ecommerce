import React, { useState } from "react";
import { getItem, setItem } from "../services/LocalStoragefuncs";
import{BsFillCartDashFill} from 'react-icons/bs'
import  './carrinho.modules.css'
import Header from "../../components/Header";


 const Carrinho =() =>{
  const [objet, setObjet] = useState( getItem('carrinhoYT') || []);
  const excluirItem = (objeto) => {
    const arrFilter = objet.filter((item) => item.id !== objeto.id)
    setObjet(arrFilter)
    setItem('carrinhoYT',arrFilter)
  }
  const valorTotal = objet.reduce((acc,cur) => acc + cur.preco , 0)
  return(

    <div className="principal">
      <Header/>
      <div className="valorTotal">
       <span> <h2>{`Valor  Total : R$  ${valorTotal}` }</h2></span>
      </div>
        <div className="elemento">
          {
            objet.map((item) => (
            <div className="subelemento" key={ item.id}>
              {item.imagens.map((item) => {
            return(
              <img width ={200 } height={150} src={item.url} alt={item.nome} />
              
              )
              }) 
            }
            <h3 className="subdescrição">{item.nome}</h3>
            <div className="botoes">
            
            
              <button className="preco">R$ {item.preco}</button> 
            <button className=" excluir" onClick={()=> excluirItem(item)}>
              <BsFillCartDashFill/>
            </button>
            </div>
              </div>
            ))
            }
            </div>
        </div>
  )
}


export default Carrinho;