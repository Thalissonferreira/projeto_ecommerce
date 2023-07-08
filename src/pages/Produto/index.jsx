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
          <p>{produto.nome}</p>
          {produto.imagens && <> 
          {produto.imagens.map((item, index) => {
            return(
              <img width='200px' src={item.url} alt={item.nome} />
            )
          
          }) 
          }</>
          }
          <Footer/>
         </div>
 
        )}
    
     

export default Product;