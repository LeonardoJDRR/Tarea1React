import miImagen from '../assets/paises.jpg'

function BaconSection() {
  return (
    <div className="imagen-contenedor">
      <div className="imagen-placeholder">
        <img 
          src={miImagen} 
          alt="Mi imagen" 
          className="imagen-real"
        />
      </div>
    </div>
  )
}

export default BaconSection