import{Route, Routes} from 'react-router-dom'
import Home from './Home'
import Carrinho from './Carrinho'
import Contato from './Contato'
import Sobre from './Sobre'
import Login from './Login'
import Cadastro from './Cadastro'
import Produto from './Produto'

const Rotas =() => {
    return(
        <Routes>
            <Route  path='/'element={<Login/>}/>
            <Route  path='/Carrinho'element={<Carrinho/>}/>
            <Route  path='/Contato'element={<Contato/>}/>
            <Route  path='/Sobre'element={<Sobre/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Cadastro' element={<Cadastro/>}/>
            <Route path='/Produto/:id' element={<Produto/>}/>
        </Routes>
    )
}

export default Rotas
