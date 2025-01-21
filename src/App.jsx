import { useState } from 'react'
import './assets/style/App.css'
import Navbar from "./components/Navbar";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar />
    </div>
  
    
      <h1>Kasa</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


export default App
