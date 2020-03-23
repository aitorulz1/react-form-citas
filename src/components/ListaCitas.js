import React from 'react'

const ListaCitas = ({cita, eliminarCita}) => {

    const { mascota, propietario, fecha, hora, sintomas} = cita;

    

    return(
        <div>
            <p>Mascota: <span>{mascota}</span></p>
            <p>Propietario: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Síntomas: <span>{sintomas}</span></p>

            <button
                className="full-width"
                onClick= { () => eliminarCita(cita.id)}
            >Eliminar Cita</button>
        </div>
    )
}

export default ListaCitas