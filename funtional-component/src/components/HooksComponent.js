import React, {useState} from 'react'

export function HooksComponent() {
    const intitialCount = 0;
    const [count, setCount] = useState(intitialCount);
    const [name, setName] = useState("Subham");

    const handleName = () => {
        if(name === "Subham"){
            setName(name.toUpperCase());
        }
    }
  return (
    <>
    <h2>Hooks Component</h2>
    <p>count = {count}</p>
    <p>hyyy {name} here !!</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Dncrement</button>
    <button onClick={() => setCount(intitialCount)}>Reset</button>
    <button onClick={handleName}>Capitalize</button>
    </>
  )
}
