import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Formulario from "./componentes/formulario"
import Swal from 'sweetalert2'

function App() {

  Swal.fire({
    title: "Validador de Mensaje",
    text: "Para que tu mensaje sea valido no debe contener mas de 7 números (digitos o letras), los números seran contabilizados con digitos, letras e incluso errores ortográficos (ejemplo: zeiz, ceiz o zeis seran contabilizados)",
    icon: "info"
     })

  return (
    <div className="App vh-100 d-flex justify-content-center align-items-center">
     <div className="bg-secondary text-white rounded m-auto">
     <h1 className="container text-center mt-3">Validador de Mensaje</h1>
     <Formulario/>
     </div> 
    </div>
  );
}

export default App;
