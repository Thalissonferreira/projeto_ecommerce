import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Carrinho from './Carrinho'
import Contato from './Contato'
import Sobre from './Sobre'

const Rotas =() => {
    return(
        <BrowserRouter>
        <Routes>
            <Route  path='/'element={<Home/>}/>
            <Route  path='/Carrinho'element={<Carrinho/>}/>
            <Route  path='/Contato'element={<Contato/>}/>
            <Route  path='/Sobre'element={<Sobre/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas
