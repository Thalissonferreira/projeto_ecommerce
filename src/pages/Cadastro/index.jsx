import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Header from '../../components/Header';



function Cadastro() {
  const navigate = useNavigate();
  const[ Nome, setNome]= useState("");
  const[ Email, setEmail]= useState("");
  const[ Senha, setSenha]= useState("");

  const fazerCadastro = async (e) => {
    e.preventDefault();

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
}
  return (
    <div>
      <form onSubmit ={fazerCadastro}>
            <label>Nome : </label>
            <input type='text' placeholder='Seu nome' onChange={e => setNome(e.target.value)}/>
            <br/><br/><br/>
            <label>Email : </label>
            <input type='email' placeholder='E-mail' onChange={e => setEmail(e.target.value)}/>
            <br/><br/><br/>
            <label>Senha : </label>
            <input type='password' placeholder='Senha' onChange={e => setSenha(e.target.value)}/>
            <br/><br/><br/>
            <button >Cadastre-se</button>
            <br/><br/><br/>
            <Link to={'/'}>Ja possui um conta?</Link><br/> 
        </form>
    </div>
  
  );
}
export default Cadastro;