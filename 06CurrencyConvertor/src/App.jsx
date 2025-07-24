import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex gap-5 justify-center '>
      <h1 className="text-3xl bg-orange-500 text-white">Hey!</h1>
      <h1 className="text-3xl bg-green-500 text-white">How!</h1>
      <h1 className="text-3xl bg-yellow-500 text-white">are!</h1>
      <h1 className="text-3xl bg-pink-500 text-white">you!</h1>
    </div>
    </>
  )
}

export default App
