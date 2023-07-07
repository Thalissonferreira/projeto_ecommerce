import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import "./product.modules.css";

import { useParams } from 'react-router-dom'
function Product() {

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [qtd, setQtd] = useState(1);
  const [item, setItem] = useState([]);

  const removeQtd = () => {
    let quant = qtd;

    if(quant === 0){
      return;
    }

    quant--;
    setQtd(quant);
  }

  const addQtd = () => {
    let quant = qtd;

    if(quant === product.quantidade){
      return;
    }

    quant++;
    setQtd(quant);
  }

  
  
  useEffect(() => {
    async function loadApi(){
      const res = await fetch(`https://infracode-api.onrender.com/produtos/${ id }`);
      const json = await res.json();
      
      setProduct(json);
    };

    loadApi();
  },[])
  
  const addItem = () => {
    let cart = [];
    if (!localStorage.getItem('cart')) {
      cart = [];
    } else {
      cart = JSON.parse(localStorage.getItem('cart'));
    }

    const itemCart = {
      id: product.id,
      preco: product.preco,
      quantidade: qtd,
      image: product.imagens[0].url,
      nome: product.nome
    }

    const itemExistente = cart.find((item) => item.id === product.id);
    if (itemExistente) {
      const novosItens = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantidade: item.quantidade + qtd }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(novosItens));
      setItem(novosItens);
    }  else {
      const novoCarrinho = [...cart, itemCart];
      localStorage.setItem('cart', JSON.stringify(novoCarrinho));
      setItem(novoCarrinho);
    }
  };

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px',
    backgroundRepeat: 'no-repeat'
  }

  const options = {style: "currency", currency: "BRL"};

  return (
    <>
      <div className='product-container'>
        <div className="product-container__wrapper">
          <div className="slide-container">
            {product.imagens && 
              <Slide>
              {product.imagens.map((item, index)=> (
                  <div key={index}>
                    <div style={{ ...divStyle, 'backgroundImage': `url(${item.url})` }}></div>
                  </div>
                ))} 
              </Slide>
            }
          </div>
          <div className='product-info'>
            <h2>{product.nome}</h2>
            <p className='description'>{product.descricao}</p>
            <p className='price'>
              {product.preco?.toLocaleString("pt-BR", options)}
              <small>
                &nbsp;ou 12x de {(parseFloat(product.preco) / 12).toLocaleString("pt-BR", options)}
              </small>
            </p>
            <label className='qtd'>
              <span onClick={removeQtd}>
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </span>
              <input type="text" readOnly placeholder='00' value={qtd} onChange={(e => setQtd(e.target.value))} />
              <span onClick={addQtd}>
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </span>
            </label>
            
            <button onClick={addItem}>Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;