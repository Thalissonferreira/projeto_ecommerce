import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Cabecalho from "../../components/cabecalho";
import Footer from "../../components/Footer";
import { clear } from '@testing-library/user-event/dist/clear';




function Cadastro() {
  const[desabilitado, setDesabilitado]= useState(false);
  const navigate = useNavigate();
  const[ Nome, setNome]= useState("");
  const[ Email, setEmail]= useState("");
  const[ Senha, setSenha]= useState("");

  const fazerCadastro = async (e) => {
    e.preventDefault();
    setDesabilitado(true)

    const res = await fetch('https://infracode-api.onrender.com/usuarios', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            nome: Nome,
            email: Email,
            senha: Senha
        })
    });
        if( res.status == 200){
            navigate("/Cadastro")
        }
        setDesabilitado(false)
}
  return (
    <body>
   <Cabecalho/>


    <section className='area-de-login'>
 
      <form className="form-login" onSubmit  ={fazerCadastro}>
      <h2>LOGIN</h2>
          <h4>Preencha seus dados para cadastro</h4>
          <fieldset className="inputs-login">
            <section className="inputs-login">
            <div className="img-input">
              <input className='idEmail' type='text' placeholder='Digite seu nome' onChange={e => setNome(e.target.value)}/>
              </div>
              <div className="img-input">
              <input className='idEmail' type='email' placeholder='Digite seu E-mail' onChange={e => setEmail(e.target.value)}/>
              </div>
              <div className="img-input">
              <input className='idEmail' type='password' placeholder=' crie sua Senha' onChange={e => setSenha(e.target.value)}/>
              </div>
          </section>
          </fieldset>
            <button disabled={desabilitado}className="btn-login" >Cadastre-se</button>
           
            <Link to={'/'}>Ja possui um conta?</Link><br/> 

         
      </form>
      </section>
      
    <Footer/>
    </body>
  );
}
export default Cadastro;