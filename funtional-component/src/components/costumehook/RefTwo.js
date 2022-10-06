import React, { useState } from 'react'
import { CostumeHook } from './CostumeHook'

export function RefTwo() {
    const [count, increment, decrement, reset] = CostumeHook();
  return (
    <>
    <h2>RefTwo</h2>
    <h2>Count : {count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}
