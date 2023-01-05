
 import React, { useState } from 'react'
 import './name.css'
 
 function Name(props) {

const [name , setname] = useState()


   return (
    <div className='entry'>
    <h3>Enter YOUR NAME</h3>
    <input type="text"  value={name}  onChange={ (e) => setname(e.target.value)}></input><br />
    < button className="sub"onClick={props.enter}>Submit</button>
    
    
 </div>
   )
 }
 
 export default Name;