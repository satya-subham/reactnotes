import React,{ useState, useEffect, useRef} from 'react'

export function UseRef() {
  const [name, setName] = useState('');
  const countObj = useRef(0)

  useEffect(() => {
    countObj.current += 1 ;
  }, [name]);

  return (
    <>
    <h2>UseRef</h2>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    <h3>this is {name}</h3>
    <h3>this is {countObj.current}</h3>
    </>
  )
}
