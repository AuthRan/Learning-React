import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  let changeValue = () => {
    if(count === 20){
      return;
    }
    count ++;
    setCount(count)
  }
  let changevalue = () => {
    if(count === 0){
      return;
    }
    count --;
    setCount(count)
  }
  return (
    <>
    <h1>Welcome to my first react Mini Project</h1>
    <h2>Count: {count}</h2>
    <button onClick={
      changeValue
    }>Add Value</button>
    <button onClick={
      changevalue
    }>Decrease Value</button>
    </>
  )
}

export default App
