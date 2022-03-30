import React, { Fragment } from 'react';
import Tarea from './Tarea';


const ListadoTareas = () => {
   
    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Plataforma de pago', estado: false },
        { nombre: 'Elegir Hosting', estado: true }
        ];
   
    return (  

        
        <Fragment>
        <h2>Proyecto: Tienda Virtuall</h2>

        <ul className='listado-tareas'>
            { tareasProyecto.length === 0
                ? (<li className='tarea'><p>No hay Tareas</p></li>)
                : tareasProyecto.map( tarea => (
                    <Tarea
                        tarea={tarea}
                    />
                ))
            
            }
            

            
        </ul>
        </Fragment>
    );
}
 
export default ListadoTareas;