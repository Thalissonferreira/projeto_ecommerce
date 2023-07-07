import React, {useState} from 'react';
import Cookies from 'js-cookie';
import { useNavigate, Link } from 'react-router-dom'
import "./login.modules.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [disable, setDisable] = useState(false);

    const doLogin = async(e) => {
        e.preventDefault();
        setDisable(true);

        const res = await fetch('https://infracode-api.onrender.com/auth/login', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({email, senha})
        })

        const json = await res.json();
        Cookies.set('token', json.token);
        if(res.status === 200) {
            navigate("/")
        }
        setDisable(false);
    }

    return (
        <div className='loginBox'>
            <img src="/logo.png" alt="InfraCode Store" />
            <form onSubmit={doLogin}>
                <input type="email" disabled={disable} placeholder='E-mail' onChange={e => setEmail(e.target.value)} required/>
                <input type="password" disabled={disable} placeholder='Senha' onChange={e => setSenha(e.target.value)} required/>
                <button disabled={disable}>Login</button>
            </form>
            <Link to="/cadastro">Ainda não tem cadastro? Cadastre-se</Link>
        </div>
    )
}

export default Login;
