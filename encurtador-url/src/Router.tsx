import {Routes, Route} from 'react-router-dom'
import { LayoutPadrao } from './layouts'
import { Encurtador, RegrasDeNegocio } from './pages'

const Router = () => {
    return (
        <Routes>
            // O Layout Padrão sempre será renderizado
            <Route path='/' element={<LayoutPadrao />}>
                // O que estiver aqui será passado como Outlet
                <Route path='/' element={<Encurtador />}/>
                <Route path='regras' element={<RegrasDeNegocio />} />
            </Route>
        </Routes>
    )
}

export {Router}