import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [disable, setDisable] = useState(false);

    const doRegister = async(e) => {
        e.preventDefault();
        setDisable(true);

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

        setDisable(false);
    }

    return (
        <div className='loginBox'>
            <img src="/logo.png" alt="InfraCode Store" />
            <form onSubmit={doRegister}>
                <input type="text" disabled={disable} placeholder='Nome Completo' value={nome} onChange={e => setNome(e.target.value)}/>
                <input type="email" disabled={disable} placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" disabled={disable} placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)}/>
                <button disabled={disable}>Cadastrar</button>
            </form>
            <Link to="/login">Já tem cadastro? Faça o login</Link>
        </div>
    )
}

export default Signup;
