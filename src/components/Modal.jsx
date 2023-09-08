import { useState } from "react";
import CerrarBtn from "../../public/img/cerrar.svg";
export default function Modal({ setModal, animarModal, setAnimarModal }) {
  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const [nombre, setNombre] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />
      </div>
      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`} onSubmit={handleSubmit}>
        <legend>Nuevo Gasto</legend>
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
