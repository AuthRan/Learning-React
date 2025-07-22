import { useState } from 'react'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-4xl'>Tailwind Test</h1>
      <Card name='Ash' surname='Ran'/>
      <Card name='Som' surname='Shri'/>
    </>
  )
}

export default App
