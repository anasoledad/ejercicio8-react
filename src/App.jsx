import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TituloForm from './components/TituloForm';
import Formulario from './components/Formulario';


function App() {

  return (
    <>
      <section className='mainPage'>
        <TituloForm></TituloForm>
        <Formulario></Formulario>
      </section>
      <footer className='bg-dark text-light text-center py-4'>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
      
    </>
  )
}

export default App
