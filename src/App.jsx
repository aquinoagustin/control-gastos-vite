import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from '../public/img/nuevo-gasto.svg'
import Modal from './components/Modal';
function App() {
  const [presupuesto,setPresupuesto] = useState(0);
  const [isValidPresupuesto,setIsValidPresupuesto] = useState(false);
  const [modal,setModal] = useState(false);

  const handleNuevoGasto = () => {
    setModal(true);
  }

  return (
    <div>
      <Header presupuesto={presupuesto} setPresupuesto={setPresupuesto}
              isValidPresupuesto={isValidPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto}/>
      {isValidPresupuesto && (
      <div className='nuevo-gasto'>
        <img src={IconoNuevoGasto} alt='Nuevo Gasto' onClick={handleNuevoGasto}/>
      </div>
      )}
      {modal && <Modal/>}
    </div>
  )
}

export default App
