import { formatearFecha } from "../helpers";
import IconoAhorro from '../../public/img/icono_ahorro.svg';
import IconoCasa from '../../public/img/icono_casa.svg';
import IconoComida from '../../public/img/icono_comida.svg';
import IconoGastos from '../../public/img/icono_gastos.svg';
import IconoOcio from '../../public/img/icono_ocio.svg';
import IconoSalud from '../../public/img/icono_salud.svg';
import IconoSuscripciones from '../../public/img/icono_suscripciones.svg';

const diccionarioIconos = {
  ahorro: IconoAhorro,
  casa : IconoCasa,
  comida : IconoComida,
  gastos : IconoGastos,
  ocio : IconoOcio,
  salud : IconoSalud,
  suscripciones : IconoSuscripciones
}

export default function Gasto({ gasto }) {
  const { nombre, cantidad, categoria, id,fecha } = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={diccionarioIconos[categoria]} alt="Icono"/>
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">
            Agregado el : {''}
            <span>{formatearFecha(fecha)}</span>
          </p>
        </div>
      </div>
        <p className="cantidad-gasto">US${cantidad}</p>
    </div>
  );
}
