'use client'
import React, { useState } from "react"

export default function Counter() {
  const [counter, setCounter] = useState(1)

  function increment() {
    if (counter < 20)
      setCounter(counter + 1)
    return counter
  }

  function decrement() {
    if (counter > 1)
      setCounter(counter - 1)
    return counter
  }
  return (
    <div>
      <h2 className="text-4xl">{counter}</h2>
      <button className="bg-blue-500 text-white w-10 h-10" onClick={increment}>+</button>
      <button className="bg-white text-blue-500 w-10 h-10" onClick={decrement}>-</button>
    </div>
  )
}