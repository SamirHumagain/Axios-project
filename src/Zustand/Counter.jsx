import React from 'react'
import  useStore  from '../Zustand/Store'

const Counter = () => {

const {count, increase, reset, decrease}=useStore();
  return (
    <div className='flex  flex-col justify-center items-center'>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      
    <button onClick={decrease}>Decrease</button>
    
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
