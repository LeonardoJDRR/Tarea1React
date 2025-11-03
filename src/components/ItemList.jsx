function ItemList() {
  const items = [
    { id: 1, nombre: 'Elemento 1' },
    { id: 2, nombre: 'Elemento 2' },
    { id: 3, nombre: 'Elemento 3' },
    { id: 4, nombre: 'Elemento 4' },
    { id: 5, nombre: 'Elemento 5' }
  ]

  return (
    <div className="lista-contenedor">
      {items.map(item => (
        <div key={item.id} className="linea-id">
          id:{item.id} - {item.nombre}
        </div>
      ))}
    </div>
  )
}

export default ItemList