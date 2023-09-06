import { useState } from "react";
export default function NuevoPresupuesto({presupuesto,setPresupuesto}){
    const handlePresupuesto = (e) =>{
        e.preventDefault();
        if(!Number(presupuesto) || Number(presupuesto)<0){
            console.log('No es valido')
        }else{
            console.log('Es numero')
        }

    }
    return(
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario" onSubmit={handlePresupuesto}>
                <div className="campo">
                    <label>Definir Presupuesto</label>
                    <input
                        className="nuevo-presupuesto"
                        type="text"
                        placeholder="Añade tu Presupuesto"
                        value={presupuesto}
                        onChange={e=>setPresupuesto(e.target.value)}
                    />
                </div>
                <input type="submit" value='Añadir'/>
            </form>
        </div>
    )
}