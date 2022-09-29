import React, { useState } from 'react'

export function StateWithArray() {
    const [items, setItems] = useState(["apple", "banana"]);
    const [fruit, setFruit] = useState("tamato");

    const addItems = () =>{
        setItems([...items, fruit]);
        setFruit("")
    }
    
  return (
    <>
    <h2>StateWithArray</h2>
    <input type="text" placeholder='Add items' value={fruit} onChange={(e) => setFruit(e.target.value)}/>
    <button onClick={addItems}>Add</button>
    {items.map((item) =>
    <div> 
    <span>{item}</span>
    <button>Edit</button>
    <button onClick={() => {
        let filteredItems = items.filter((value) => value !== item)
        setItems([...filteredItems])
    }}>Delete</button>
    </div>)}
    </>
  )
}
