import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import ListaCitas from './components/ListaCitas'



function App() {

 // 1. Formulario -> Creo Citas

 const [ citas, guardarCitas ] = useState([]) // CoL DeReChA

 const crearCita = cita => {                   // CoL IzQuIeRdA
  guardarCitas([
      ...citas,
      cita
  ]);
}


// 1. ListadoCitas -> Eliminar Cita

const eliminarCita = id => {
  const lasQueQuedanCitas = citas.filter(cita => cita.id !== id);
  guardarCitas(lasQueQuedanCitas)
}


// 2. Cambiar titulo

const titulo = citas.length === 0 ? <p>No hay citas</p> : <p>Estas son las citas</p>


// 3. Citas en localStorage q se encuentra en Application en el inspeccionador
  let citasIniciales = JSON.parse(localStorage.getItem('citas')); // El paese es porque localStorage solo permite strings
  if(!citasIniciales) {
    citasIniciales = [];
  }


  // 4. useEffect -> Q no se elimminen al refrescar! Siempre es una array function. Colocamos citas en el storage. El areglo se le conoce como dependencia

  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas])



  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

        <div className="container">
          <div className="row">
            <div className="one-half-column">
              <Formulario 
                crearCita={crearCita}
              />
            </div>
            <div className="one-half-column">
              <h1>{titulo}</h1>
              {citas.map(cita =>
                <ListaCitas 
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
                )}
            </div>
          </div>
        </div>

    </Fragment>
  );
}

export default App;
