import React from 'react'
import { useEffect , useState } from 'react'
export default function Other() {
const [count , setCount] = useState(0);
const [calc , setCalc] = useState(0);

useEffect(() => {
    setCalc(() => count * 2); 
},[count])
  return (
    <>
    <p>count: {count}</p>
<button
 type='button'
 onClick={() => setCount((c) => c + 1 )}
>+</button>   
<p>
calculation: {calc};
  </p>  
    </>
  )
}
