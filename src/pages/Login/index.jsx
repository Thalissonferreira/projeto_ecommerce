import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'



function Login() {
  const navigate = useNavigate();
  const[ Email, setEmail]= useState("");
  const[ Senha, setSenha]= useState("");

  const fazerLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('https://infracode-api.onrender.com/auth/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email: Email,
            senha: Senha
        })
    });
        if( res.status == 200){
            navigate("/Home")
           
            

        }
        if(res.status !== 200 )
        alert("Login invalido!  Por favor tente novamente")
        
}
  return (
    <div>
      <form onSubmit ={fazerLogin}>
            <label>Email : </label>
            <input type='email' placeholder='E-mail' onChange={e => setEmail(e.target.value)}/>
            <br/><br/><br/>
            <label>Senha : </label>
            <input type='password' placeholder='Senha' onChange={e => setSenha(e.target.value)}/>
            <br/><br/><br/>
            <button >Entrar</button>
        </form>
        <footer>
        <Link to={'/Cadastro'}>Cadastre-se</Link><br/> 
        </footer>
    </div>
  );
}
export default Login;
