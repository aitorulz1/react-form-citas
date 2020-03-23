import React, {useState, Fragment} from 'react'
import uuid from 'uuid/v4'

const Formulario = ({crearCita}) => {

// 1. cita

    const [cita, actualizarCita] = useState({
        mascota : "",
        propietario : "",
        fecha : "",
        hora : "",
        sintomas : ""
    })
    const [error, actualizarError] = useState(false)


// 2. actualizarCita on write input
    
    const handleChange = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }



// 3. meto los valores de input en const cita

    const { mascota, propietario, fecha, hora, sintomas } = cita;

// 4. Submit onCLick

    const submitCita = (e) => {
        e.preventDefault();

        // 4.1 Validar

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ){
            
        actualizarError(true);
        return;
        }

        // 4.2 Volver a false

        actualizarError(false);

        
        //4.3 Asignar id

        cita.id = uuid();

        
        // 4.4 Crear cita -> En citas voy a guardarCitas -> Voy a App (Donde están las citas...)

        crearCita(cita)

    

    // 5. Reiniciar el form

        actualizarCita({
            mascota : "",
            propietario : "",
            fecha : "",
            hora : "",
            sintomas : ""        
        })

}
    


        return(
        <Fragment>
            <h2>Crear Cita</h2>

                { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

                    <form
                        onSubmit = {submitCita}
                    >

                            <label>Mascota</label>
                            <input 
                                type="text"
                                name="mascota"
                                className="full-width"
                                placeholder="Nombre de tu Mascota"
                                onChange = {handleChange}
                                value= {mascota}
                            />

                            <label>Propietario</label>
                            <input 
                                type="text"
                                name="propietario"
                                className="full-width"
                                placeholder="Tu nombre"
                                onChange = {handleChange}
                                value= {propietario}
                            />

                            <label>Fecha</label>
                            <input 
                                type="date"
                                name="fecha"
                                className="full-width"
                                onChange = {handleChange}
                                value= {fecha}
                            />

                            <label>Hora</label>
                            <input 
                                type="time"
                                name="hora"
                                className="full-width"
                                onChange = {handleChange}
                                value= {hora}
                            />

                            <label>Síntomas</label>
                            <textarea
                                name="sintomas"
                                className="full-width"
                                placeholder="Qué le pasa al animal"
                                onChange = {handleChange}
                                value= {sintomas}
                            >
                            </textarea>


                            <button
                                type="submit"
                                className="full-width"
                            >
                                Enviar
                            </button>



                    </form>
            </Fragment>
        )

}

export default Formulario