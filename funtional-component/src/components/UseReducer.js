import React, {useReducer} from 'react'


const intialStage = 0;
const reducer = (state, action) => {
    switch(action){
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        case 'RESET': return intialStage;
        default: return state;
    }
}
export function UseReducer() {
    const [count, dispatch] = useReducer(reducer, intialStage)
  return (
    <>
    <h1>UseReducer</h1>
    <h2>count = {count}</h2>
    <button onClick={() => dispatch('INCREMENT')}>Increment</button>
    <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
    <button onClick={() => dispatch('RESET')}>Reset</button>
    </>
  )
}
