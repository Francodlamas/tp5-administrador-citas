import React from 'react';
import "./input.css";
import ReactDOM from 'react-dom/client';
import Formulario from './components/Formulario';
import Citas from './components/Citas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div class="grid flex justify-center">
      <div className='text-4x'>
      <div class="mt-10 ...">
        ADMINISTRADOR DE PACIENTES
      </div>
      </div>
      </div > 
    <div class="flex items-stretch justify-center">
      <div class="py-6">
         <Formulario/>
      </div>

      <div className='bg-slate-100 py-6 mr-4 '>
          <Citas/>
      </div>
   
    
    </div>
  </React.StrictMode>
);


