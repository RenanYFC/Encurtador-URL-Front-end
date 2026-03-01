import {Routes, Route} from 'react-router-dom'
import { LayoutPadrao } from './layouts'
import { Encurtador, RegrasDeNegocio } from './pages'
import { Redirecionar } from './pages/Redirecionar/Redirecionar'

const Router = () => {
    return (
        <Routes>
            // O Layout Padrão sempre será renderizado
            <Route path='/' element={<LayoutPadrao />}>
                // O que estiver aqui será passado como Outlet
                <Route path='/' element={<Encurtador />}/>
                <Route path='regras' element={<RegrasDeNegocio />} />
                <Route path='*' element={<Redirecionar />} />
            </Route>
        </Routes>
    )
}

export {Router}