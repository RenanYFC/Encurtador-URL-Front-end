import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav className='flex justify-between items-center p-5'>
        <h1 className='text-[var(--primary)] text-4xl font-bold'>Encurtador de Links</h1>
        <ul className='flex gap-7'>
          <li>Regras de Negócio</li>
          <li>Repositório</li>
          <li>GitHub</li>
        </ul>
      </nav>
    </div>
  )
}

export default App
