import React, { useState, useEffect } from 'react'

export function TitelChange() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [counter, setCounter] = useState(0);
    const changeCount = () => {
        setCount(count + 1);
    }

    useEffect(()=>{
        document.title = `You clicked ${count} times`
    }, [count]);

    const runCount = () =>{
      setCounter((prev) => prev + 1);
    }
    useEffect(()=>{
      let data = setInterval(runCount, 1000)

      return ()=>{
        clearInterval(data)
      }
    })
   
  return (
    <>
    <h2>runCount = {counter}</h2>
    <h2>TitelChange</h2>
    <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
    <button onClick={changeCount}>Count = {count}</button>
    </>
  )
}
