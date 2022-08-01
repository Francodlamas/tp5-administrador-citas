
function Form(props) {
   return(
<div className="container pt-4 pb-4">
    <h2 className='text-4xl'>CREAR MI CITA</h2>
<form>
<div class="mb-2 w-[400px]">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre Mascota</label>
    <input type="text" id="large-input" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div class="mb-2">
    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre Dueño</label>
    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div class="mb-2">
    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fecha</label>
    <input type="date" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div class="mb-2">
    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hora</label>
    <input type="time" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>

<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Sintomas</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar cita</button>
</form>
</div>

    );
}
    export default Form;