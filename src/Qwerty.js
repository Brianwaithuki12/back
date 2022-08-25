import React from 'react'
import {useState} from 'react'

// eslint-disable-next-line no-unused-vars
// const myForm = () => {
//     const[myCar, setMyCar] = useState("Volvo")
//     return(
//         <form>
//             <select value={myCar} onChange={(e) => setMyCar(e.target.value)}>
//               <option value='Ford'>Ford</option>
//               <option value='Volvo'>Volvo</option>
//               <option value='Fiat'>Fiat</option>
//             </select>
//         </form>
//     )
// }
const Qwerty = () => {
    const [name,setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name} `)
    }
    
 return (
    <>
 <form onSubmit={handleSubmit}>
  <label>
    enter your name:
    <input type="text" 
           value={name}
           onChange= {(e) => setName(e.target.value)}
    />
  </label>
  <input type="submit"/>
 </form>
 
 </>
 );
}
export default Qwerty;
