export default function ControlPresupuesto({presupuesto}){
    return(
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Grafica aquí</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto:</span>${presupuesto}
                </p>
            </div>
        </div>
    )
}