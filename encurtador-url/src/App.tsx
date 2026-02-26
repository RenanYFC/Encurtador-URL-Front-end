import { useState } from 'react'
import './App.css'
import {Button, TextField, Switch, InputRadio} from './components'

function App() {
  const [facil_ler, set_facil_ler] = useState(false);
  const [link, setLink] = useState(null);
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
          {
            link &&
            <div>
              <p><a href={"http://localhost:5173/"+link}>{"http://localhost:5173/"+link}</a></p>
            </div>
          }

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

          <Button className="w-2/5" onClick={()=>{HandleSendButton(setLink)}}>Gerar</Button>
      </main>
    </div>
  )
}

const HandleSendButton = (setLink: React.Dispatch<React.SetStateAction<null>>) => {
  console.log("clicado");
  fetch("http://localhost:3000/urls", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Accept": "application/json",
      "key": "###"
    }
  })
  .then((res)=>{
    console.log(res);
    return res.json();
  })
  .then((json)=>{
    setLink(json.cod_url);
    console.log(json);
  })
  .catch((err)=>{
    console.log("erro: ",err)
  })
}

export default App
