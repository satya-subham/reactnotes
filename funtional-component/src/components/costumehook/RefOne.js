import React, { useState} from 'react'
import { CostumeHook } from './CostumeHook'

export function RefOne() {
    const [count, increment, decrement, reset] = CostumeHook();
  return (
    <>
    <h1>CostumeHook</h1>
    <h2>RefOne</h2>
    <h2>Count : {count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}
