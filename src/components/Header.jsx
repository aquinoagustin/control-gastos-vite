import NuevoPresupuesto from "./NuevoPrusupuesto"
export default function Header({presupuesto,setPresupuesto}){
    return(
        <header>
            <h1>Planificador de Gastos</h1>
            <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
            />
        </header>
    )
}