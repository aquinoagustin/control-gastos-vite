import { useEffect, useState } from "react";
import CerrarBtn from "../img/cerrar.svg";
import Mensaje from "./Mensaje";
export default function Modal({ setModal, animarModal, setAnimarModal,guardarGasto,gastoEditar }) {
  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [mensaje,setMensaje] = useState('');


  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
    }

  },[gastoEditar])


  const handleSubmit = e => {
    e.preventDefault();
    if([nombre,cantidad,categoria].includes('')){
      setMensaje('Todos los campos son obligatorios')
      setTimeout(()=>{
        setMensaje('');
      },3000)
      return;
    }
    guardarGasto({nombre,cantidad,categoria});
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />
      </div>
      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`} onSubmit={handleSubmit}>
        <legend> {(Object.keys(gastoEditar).length > 0)?'Editar Gasto':'Nuevo Gasto'}</legend>
          {mensaje && <Mensaje tipo={'error'}>{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            placeholder="Añade el Nombre del Gasto"
            id="nombre"
            value={nombre}
            onChange={e=>setNombre(e.target.value)}
          />
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            placeholder="Añade la cantidad del Gasto"
            id="cantidad"
            value={cantidad}
            onChange={e=>setCantidad(Number(e.target.value))}
          />
          <div className="campo">
            <label htmlFor="categoria">Categoria</label>
            <select id="categoria" value={categoria} onChange={e=>setCategoria(e.target.value)}>
              <option value="">-- Seleccione --</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos Varios</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
            </select>
          </div>
          <input type="submit" value="Añadir Gasto"/>
        </div>
      </form>
    </div>
  );
}
