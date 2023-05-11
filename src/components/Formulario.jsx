import React, { Fragment, useState } from 'react'
import {v4} from "uuid"
import PropTypes from "prop-types"

const Formulario = ({crearCita}) => {
    const [formulario, setformulario] = useState({
        nombre: "",
        dueño:"",
        hora:"",
        sintomas: "",
        fecha: "",
    })

    const [isError, setisError] = useState(false)

const {nombre,dueño,hora,sintomas,fecha} = formulario



    const handleChange =(e) => {
       setformulario({
        ...formulario,
        [e.target.name]: e.target.value
       })
    }
    console.log(formulario)
    const handleSubmit = (e) => {
        e.preventDefault()
        // validacion
        if(nombre.trim().length == 0||dueño.trim().length == 0 || hora.trim().length == 0 || fecha.trim().length == 0 || sintomas.trim().length == 0){
            return setisError(true)
        }
        setisError(false)
        formulario.id = v4()
        crearCita(formulario)
        console.log(formulario)

        setformulario({
            
                nombre: "",
                dueño:"",
                hora:"",
                sintomas: "",
                fecha: "",
            
        })

    }
  return (
   <Fragment>
    <h2>crear cita</h2>
    {isError
    ? <p className='alerta-error'>todos los campos son necesarios</p>
: ""}
    <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input 
        onChange={handleChange}
        type="text"
        className='u-full-width' 
        placeholder='Nombre Mascota'
        name='nombre'
        id='nombre'
        value={nombre}/>
        
        <label>Nombre dueño</label>
        <input 
        type="text"
        placeholder='Nombre dueño de Mascota'
        name='dueño'
        className='u-full-width'
        onChange={handleChange}
        value={dueño} />

        <label>Fecha</label>
        <input type="date" 
                name="fecha" 
                className='u-full-width'
                onChange={handleChange}
                value={fecha}/>

         <label>Hora</label>
         <input 
         type="time" 
         name="hora" 
         className='u-full-width'
         onChange={handleChange} 
         value={fecha}/>

         <label>Sintomas</label>  
         <textarea 
         name="sintomas"
         className='u-full-width' 
         cols="30" 
         rows="10"
         onChange={handleChange}
         value={sintomas}></textarea>  
         <button className='button-primary u-full-width'>agregar cita</button>           
    </form>
   </Fragment>
  )
}

Formulario.prototype = {
   crearCita: PropTypes.func.isRequired
}

export default Formulario