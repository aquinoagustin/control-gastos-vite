import { useState } from 'react'
import Header from './components/Header'
function App() {
  const [presupuesto,setPresupuesto] = useState(0);
  const [isValidPresupuesto,setIsValidPresupuesto] = useState(false);
  return (
    <div>
      <Header presupuesto={presupuesto} setPresupuesto={setPresupuesto}
              isValidPresupuesto={isValidPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto}/>
      <h1>Control-gastos-vite</h1>
    </div>
  )
}

export default App
