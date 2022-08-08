import { useState } from "react";
import Formulario from './Formulario';
import ListadoCitas from './ListadoCitas';
import "../input.css";

function App() {
  const [citas, setCitas] = useState([{                     // setcitas es la funcion que cambia los valores de cita
    NombreMascota: "Nina",
    Propietario: "Martin",
    fecha: "2021-08-05",
    hora: "08:20",
    sintomas: "Le duele la pierna"
  }])

  return (
    <div className="text-white bg-gradient-to-bl from-[#A446B2] to-[#FF0066] min-h-[100vh]">
      <h1 className='text-4xl font-bold text-center py-8'>ADMINISTRADOR DE PACIENTES</h1>
      <div className="flex justify-around flex-col md:flex-row">
        <Formulario setCitas={setCitas} />
        <ListadoCitas citas={citas} setCitas={setCitas} />
      </div>
    </div>
    
  );
 
          
  
}

export default App;