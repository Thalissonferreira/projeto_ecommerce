import { useEffect, useState } from 'react';
import {json, useParams } from 'react-router-dom'
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Product (){

  const {id} = useParams();
    const [produto, setProduto] = useState([]);
    useEffect(() => {
      async function loadApi(){


        const url = await fetch(`https://infracode-api.onrender.com/produtos/${ id }`)
        const json = await url.json();
        setProduto(json);
    };
    loadApi();
  },[])

    fetch (json).then((Response) => Response.json()).then(() => {
      
     }).catch((err) => {
       console.error(err)
       
     },[])
        return(

        <div>
          <Header/>
          <div className='titulo'>
          <h2>{produto.nome}</h2>
          </div>
          {produto.imagens && <> 
          {produto.imagens.map((item, index) => {
            return(
              <img  src={item.url} alt={item.nome} />
            )
          
          }) 
          
          }
          <button>{
            produto.preco
            }</button></>
          }
          <Footer/>
         </div>
 
        )}
    
     

export default Product;