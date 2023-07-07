import{Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Checkout from '../pages/Checkout'
import Signup from '../pages/Signup'
import Product from '../pages/Product'

const Router =() => {
    return(
        <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Signup/>}/>
            <Route path="/produto/:id" element={<Product/>}/>
            <Route  path='/carrinho' element={<Checkout/>}/>
        </Routes>
    )
}

export default Router
