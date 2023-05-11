import React from 'react'
import PropTypes from "prop-types"

function Citas({ cita,eliminarCita }) {
    
    


    return (
        <div className='cita'>
            <p>nombre: <span>{cita.nombre}</span></p>
            <p>dueño: <span>{cita.dueño}</span></p>
            <p>hora: <span>{cita.hora}</span></p>
            
            <p>fecha: <span>{cita.fecha}</span></p>
            <p>sintomas: <span>{cita.sintomas}</span></p>
            <button onClick={() => eliminarCita(cita.id)} className='button eliminar u-full-width'>eliminar cita</button>
        </div>
    )
}

Citas.prototype = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Citas