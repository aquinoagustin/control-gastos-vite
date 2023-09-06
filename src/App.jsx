import { useState } from 'react'
import Header from './components/Header'
function App() {
  const [presupuesto,setPresupuesto] = useState(0);
  return (
    <div>
      <Header presupuesto={presupuesto} setPresupuesto={setPresupuesto}/>
      <h1>Control-gastos-vite</h1>
    </div>
  )
}

export default App
