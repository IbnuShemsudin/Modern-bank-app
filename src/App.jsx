import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
``
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-purple-500 text-white p-5 rounded-lg shadow-md ">
        <h1 className="text-center">Hello world</h1>
        <p className="read-the-docs bg-gray-950">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App
