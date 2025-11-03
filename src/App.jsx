import BaconSection from './components/BaconSection'
import ItemList from './components/ItemList'
import TextSection from './components/TextSection'
import './App.css'

function App() {
  const handleClick = () => {
    alert('Leonardo del Río te saluda desde GitHub');
  }

  return (
    <div className="contenedor-principal">
      <div className="linea-texto">Texto 1</div>
      
      <div className="espacio-exacto"></div>
      
      <BaconSection />
      
      <div className="espacio-exacto"></div>
      
      <div className="linea-texto">Texto 2</div>
      <div className="texto-blanco">Texto 3</div>
      
      <div className="espacio-exacto"></div>
      
      <ItemList />
      
      <div className="espacio-exacto"></div>
      
      <button className="boton-exacto" onClick={handleClick}>
        Botón
      </button>
      
      <div className="espacio-exacto"></div>
      <div className="linea-texto">Texto 4</div>
    </div>
  )
}

export default App