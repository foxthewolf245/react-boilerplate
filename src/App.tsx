import { useState } from 'react'
import reactLogo from './assets/react.svg'
// PASO 1: Elimina la importación del logo de Vite
// import viteLogo from '/vite.svg' 
// PASO 2: Importa tu nueva imagen desde la carpeta 'assets'
import miImagen from './assets/56.jpg' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* PASO 3: Reemplaza la sección del logo de Vite */}
        <a href="#" target="_blank"> {/* Puedes cambiar el enlace o quitar la etiqueta <a> si no la necesitas */}
          <img src={miImagen} className="logo" alt="Mi imagen" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Lobo y Especias Proyecto</h1> {/* Puedes cambiar el título */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Próximo proyecto Lobo y Especias
      </p>
    </>
  )
}

export default App
