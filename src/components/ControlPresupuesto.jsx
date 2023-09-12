import {useState, useEffect } from "react"
import {formatearCantidad} from '../helpers/index';
export default function ControlPresupuesto({gastos,presupuesto}){

    const [disponible,setDisponible] = useState();
    const [gastado,setGastado] = useState();
   
   


    useEffect(()=>{
        const totalGastado = gastos.reduce((total,gasto)=>gasto.cantidad + total,0);
        console.log(totalGastado)
        setGastado(totalGastado);
        setDisponible(presupuesto);
    },[gastos])


    return(
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Grafica aquí</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto:</span>{formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible:</span>{formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado:</span>{formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}