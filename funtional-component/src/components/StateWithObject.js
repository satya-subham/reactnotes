import React, { useState } from 'react'

export function StateWithObject() {
    const [name, setName] = useState({
        firstName: "",
        lastName: "",
    })
    const fnameHandle = (e) =>{
        setName({...name, firstName: e.target.value})
    }
    const lnameHandle = (e) =>{
        setName({...name, lastName: e.target.value})
    }
  return (
    <>
    <h2>StateWithObject</h2>
    <form>
        <div>
            <label htmlFor='fname'>First Name</label> <br/>
            <input type="text" placeholder='First Name' id='fname' value={name.firstName} onChange={fnameHandle}/>
        </div>
        <div>
            <label htmlFor='lname'>Last Name</label> <br/>
            <input type="text" placeholder='Last Name' id='lname' value={name.lastName} onChange={lnameHandle}/>
        </div>
    </form>
    </>
  )
}
