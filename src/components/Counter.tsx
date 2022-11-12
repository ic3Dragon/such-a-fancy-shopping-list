import React from 'react'
import { count } from '../utils/state'

const Counter = () => {
  return (
    <>
      <h1>{count.value}</h1>
      <button onClick={() => count.value++}>INCREMENT</button>
      <button onClick={() => count.value--}>DECREMENT</button>
    </>
  )
}

export default Counter