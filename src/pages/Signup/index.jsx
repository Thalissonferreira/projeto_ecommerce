import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const doRegister = async(e) => {
        e.preventDefault();

        const res = await fetch('https://infracode-api.onrender.com/usuarios', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({email, senha, nome})
        })

        const json = await res.json();

        if(res.status === 201) {
            navigate("/login")
        }
    }

    return (
        <form onSubmit={doRegister}>
        <input type="text" placeholder='Nome Completo' value={nome} onChange={e => setNome(e.target.value)}/>
        <input type="email" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)}/>
        <button>Login</button>
        </form>
    )
}

export default Signup;
