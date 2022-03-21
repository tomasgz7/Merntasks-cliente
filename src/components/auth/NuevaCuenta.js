import React, {useState} from 'react';
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {

    //State para el Inicio de SESIÓN
    const [usuario, setUsuario] = useState ({
          nombre: '',
          email: '',
          password: '',
          confirmar:''
        });

    // Extraer del usuario el email & password.
    const {nombre, email, password, confirmar} = usuario;
        
    const onChange = e => {
          setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
          })
    }

    //Cuando el usuario quiere iniciar Sesión
    const onSubmit = e => {
      e.prevent.default();


    //Validación para que no hayan campos vacios.

    //Que el password tenga como mínimo 6 caracteres.

    //Que los password sean iguales a la hora de crear la cuenta



    //Pasarlo al action.

    }

    return ( 
      <div className="form-usuario">
        <div className='contenedor-form sombra dark'>
          <h1>Registrarte</h1>
          <h2>¡Es rápido, no te tomará mucho tiempo!</h2>

      <form
            onSubmit={onSubmit}
      >
          <div className="campo-form">
        <label htmlFor="email">Nombre</label>
        <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder='Tu Nombre'
              value={nombre}
              onChange={onChange}
        />
        </div>

        <div className="campo-form">
        <label htmlFor="email">Email</label>
        <input
              type="email"
              id="email"
              name="email"
              placeholder='Tu Email'
              value={email}
              onChange={onChange}
        />
        </div>

        <div className="campo-form">
        <label htmlFor='password'>Contraseña</label>
        <input
              type="password"
              id="password"
              name="password"
              placeholder='Tu Contraseña'
              value={password}
              onChange={onChange}
        />
        </div>

        <div className="campo-form">
        <label htmlFor='confirmar'>Confirmar Contraseña</label>
        <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder='Vuelve a escribir tu contraseña'
              value={confirmar}
              onChange={onChange}
        />
        </div>

        <div className='campo-form'>
          <input type="submit" className='btn btn-primario btn-block' value="Registrarte" />
        </div>

      </form>

      <Link to= {'/'} className="enlace-cuenta">
         Volver al Inicio de Sesión
      </Link>

    </div>
  </div> 
 );
}
 
export default NuevaCuenta;