import { useState, Fragment, useEffect } from 'react'
import Formulario from './components/Formulario'
import Citas from './components/Citas'
import { parse } from 'uuid'


function App() {

  let listaCitas = JSON.parse(localStorage.getItem("citas"))
  if(!listaCitas){
    console.log(hola)
    listaCitas = []
  }

  const [cita, setCita] = useState(listaCitas)

  useEffect(() => {
      if(cita.length > 0){
        localStorage.setItem("citas", JSON.stringify(cita))
      }else{
        localStorage.setItem("citas", JSON.stringify([]))
      }
  }, [cita])
  const crearCita = (formulario) => {
        setCita([
          ...cita,
          formulario,
        ])
  }

  const eliminarCita = (id) => {
    const citas = cita.filter(cita =>  cita.id !== id)
    setCita(citas)
  }
  
  const creaAdmi = cita.length == 0 ? "crea una cita": "administra tus citas"
 
  return (
    <Fragment>
      <h1>Administracion de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
    <Formulario
    crearCita={crearCita}/>
          </div>
          <h2>{creaAdmi}</h2>
          <div className='one-half column'>
          {
            cita?.map(cita => {
              
              return <Citas key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita} />
            })
          }
          
          </div>
        </div>
        
      </div>
        
    </Fragment>
  )
}

export default App
