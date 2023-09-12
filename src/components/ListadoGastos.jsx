import Gasto from "./Gasto";
export default function ListadoGastos({gastos,setGastoEditar}){
    console.log(gastos)
    return(
        <div className="listado-gastos contenedor">
            <h2>{gastos.length ? "Gastos":"No hay Gastos aún"}</h2>
            {
                gastos.map(gasto=>(
                    <Gasto key={gasto.id} gasto={gasto} setGastoEditar={setGastoEditar}/>
                ))
            }
        </div>
    )
}