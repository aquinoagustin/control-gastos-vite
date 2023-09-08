import { useState } from "react";
import CerrarBtn from '../../public/img/cerrar.svg';
export default function Modal ({setModal}){
    const ocultarModal = () =>{
        setModal(false);
    }

    const [gasto,setGasto] = useState(0);
    const [cantidad,setCantidad] = useState(0);
    const [filtro,setFiltro] = useState('');
    return(
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal}/>
            </div>
        </div>
    )
}