import { useState } from "react"

export default function Form({ setCitas }) {

    const [NombreMascota, setNombreMascota] = useState("")
    const [Propietario, setPropietario] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("") 

    const enviar = (enviar2) => {
        enviar2.preventDefault();
        setCitas(prev => [...prev, {
            NombreMascota,
            Propietario,
            fecha,
            hora,
            sintomas
        }])
        setNombreMascota("")
        setPropietario("")
        setFecha("")
        setHora("")
        setSintomas("")
    }

   return(
<div className="container pt-4 pb-4">
    <h2 className='text-4xl'>CREAR MI CITA</h2>
<form onSubmit={enviar} >
<div className="mb-2 w-[400px]">
    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre Mascota</label>
    <input value={NombreMascota} onChange={enviar2 => setNombreMascota(enviar2.target.value)} type="text" id="large-input" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div className="mb-2">
    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre Dueño</label>
    <input value={Propietario} onChange={enviar2 => setPropietario(enviar2.target.value)} type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div className="mb-2">
    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fecha</label>
    <input value={fecha} onChange={enviar2 => setFecha(enviar2.target.value)} type="date" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div className="mb-2">
    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hora</label>
    <input name="Hora" value={hora} onChange={enviar2 => setHora(enviar2.target.value)} type="time" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>

<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Sintomas</label>
<textarea required name="Sintomas" value={sintomas} onChange={enviar2 => setSintomas(enviar2.target.value)} type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
<br></br>
<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar cita</button>
</form>
</div>

    );
}
   