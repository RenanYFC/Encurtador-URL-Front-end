import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

function App() {

  return (
    // O browser router deve envolver as rotas
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}


export default App
