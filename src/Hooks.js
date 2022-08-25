import React from 'react'
import { useState } from 'react';
 const Hooks = () => {
    const [car,setCar] = useState({color:"red",model: "Kia"});
    const updateColor= () => {
      setCar((x) => {
        return{ ...x , color: "blue"}
      })
    } 
    const updateModel = () => {
       setCar((y) => {
        return{...y,model:"mercedes"}
       })
    }
  return (
    <div>

     <h1>The current color is {car.color} and the model is a {car.model}</h1>
     <button
       type='button'
       onClick={updateColor}    
     >Change color of the car</button>
     <button
       type='button'
       onClick={updateModel}
     >update car model</button>

    </div>
  )
}


export default Hooks;