import { useState } from 'react'
import './App.css'
import {Button, TextField, Switch, InputRadio} from './components'
function App() {
  const [facil_ler, set_facil_ler] = useState(false);
  return (
    <div className='min-h-screen flex flex-col'>
      <nav className='flex justify-between items-center p-5'>
        <h1 className='text-[var(--primary)] text-4xl font-bold'>Encurtador de Links</h1>
        <ul className='flex gap-7'>
          <li>Regras de Negócio</li>
          <li>Repositório</li>
          <li>GitHub</li>
        </ul>
      </nav>
      <main className='w-full flex-1 flex items-center justify-center flex-col gap-10'>
          <TextField className="w-3/5">Digite seu link longo</TextField>
          {!facil_ler&&
          <div>
            <InputRadio checked={true} name='qtdd_caracteres'>5 caracteres</InputRadio>
            <InputRadio name='qtdd_caracteres'>6 caracteres</InputRadio>
            <InputRadio name='qtdd_caracteres'>7 caracteres</InputRadio>
          </div>
        }

          <div>
            <Switch onChange={()=>{set_facil_ler(!facil_ler); console.log(facil_ler)}}>Fácil de ler</Switch>
          </div>

          <Button className="w-2/5">Gerar</Button>
      </main>
    </div>
  )
}


export default App
