import React from 'react'
import count from '../count'

const Buttons = () => {
  return (
    <>
      <button onClick={() => count.value++}>INCREMENT</button>
      <button onClick={() => count.value--}>DECREMENT</button>
    </>
  )
}

export default Buttons