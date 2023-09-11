import { formatearFecha } from "../helpers";
export default function Gasto({ gasto }) {
  const { nombre, cantidad, categoria, id,fecha } = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">
            Agregado el : {''}
            <span>{formatearFecha(fecha)}</span>
          </p>
        </div>
        <p className="cantidad-gasto">US${cantidad}</p>
      </div>
    </div>
  );
}
