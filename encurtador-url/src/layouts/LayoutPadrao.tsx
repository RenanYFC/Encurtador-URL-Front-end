import { BlackGlassContainer } from "../components/BlackGlassContainer"
import { Outlet,NavLink } from "react-router-dom"
const LayoutPadrao = () => {
    return (
        <div className="flex flex-col h-screen">
            <nav className="sticky top-0 w-full">
            <BlackGlassContainer className='flex justify-between items-center p-5' shadow = {true} >
            <h1 className='text-[var(--primary)] text-4xl font-bold'><NavLink to="/">Encurtador de Links</NavLink></h1>
            <ul className='flex gap-7 cursor-pointer'>
                <NavLink to="/regras">Regras de Negócio</NavLink>
                <li><a href="https://github.com/RenanYFC/Encurtador-URL-Front-end" target="_blank">Repositório Front-end</a></li>
                <li><a href="https://github.com/RenanYFC/Encurtador-URL-Back-end" target="_blank">Repositório Back-end</a></li>
            </ul>
            </BlackGlassContainer>
            </nav>

            <main className="flex flex-1">
                <Outlet />
            </main>
        </div>
    )
}

export {LayoutPadrao}