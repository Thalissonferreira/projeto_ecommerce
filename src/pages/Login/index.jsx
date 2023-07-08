import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './login.modules.css'
import Footer from "../../components/Footer";
import Cabecalho from "../../components/cabecalho";




 function Login() {
  const navigate = useNavigate();
  const[ Email, setEmail]= useState("");
  const[ Senha, setSenha]= useState("");
  const [disable, setDisable] = useState(false);

  const fazerLogin = async (e) => { 
    e.preventDefault('');
    setDisable(true);

    const res = await fetch('https://infracode-api.onrender.com/auth/login',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email: Email,
            senha: Senha
        })
    });
 

      
    if( res.status == 200)
      navigate("/Home")
      if(res.status !== 200){
        alert("Login invalido!  Por favor tente novamente")
      }
  }
 

      

  return (

<body>
<Cabecalho/>
    <section className='area-de-login'>
        <form  className="form-login" onSubmit={fazerLogin}> 
          <h3>Login</h3>
          <h5>Preencha seus dados de acesso</h5>
            <fieldset className="inputs-login">
              <section className="inputs-login">
                <div className="img-input">
                  <input  className='idEmail' type='email' placeholder='E-mail' onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="img-input">
                  <input  className="idEmail" type='password' placeholder='Senha' onChange={e => setSenha(e.target.value)}/>
                </div>
                </section>
            </fieldset>
            <section className="area-btn-login">
                <button disabled={disable} to={'/Home'} className="btn-login">Entrar</button>
              </section>
              <section>
                <Link className="area-btn-login" to={'/Cadastro'}>Cadastre-se</Link>
              </section>
        </form>
      </section>
  <Footer/>
 </body>



  





)
  }
  export default Login;