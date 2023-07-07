import React, {useState} from 'react';
import Cookies from 'js-cookies';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const doLogin = async(e) => {
        e.preventDefault();

        const res = await fetch('https://infracode-api.onrender.com/auth/login', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({email, senha})
        })

        const json = await res.json();

        Cookies.get('token', json.token);

        if(res.status === 200) {
            navigate("/home")
        }
    }

    return (
        <form onSubmit={doLogin}>
        <input type="email" placeholder='E-mail' onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder='Senha' onChange={e => setSenha(e.target.value)}/>
        <button>Login</button>
        </form>
    )
}

export default Login;
