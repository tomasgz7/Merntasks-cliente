import React from 'react';
import { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

const ProyectoState = props => {
    const initialState = {
        formulario : false
    }


    //El dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer (proyectoReducer, initialState)

    //Serie de funciones para el CRUD

    return (
        <proyectoContext.Provider
        value={{
            formulario: state.formulario
        }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;