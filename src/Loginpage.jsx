import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function Loginpage() {
    const [name,setName]=useState('')
    const handlesubmit=(e)=>{
      if(name==="")
      {
        alert("Pleas enter your name")
        
      }else{
        e.preventDefault();
        console.log(name);
        const user=sessionStorage.setItem('key',name)
        window.location.href=("http://localhost:5173/main")
      }
    }  
  return (
    <div>
      <div className='main-container'>
        <div style={{width:'600px',height:'500px'}} className='container name-container'>
          <h2 style={{marginTop:'50px',marginBottom:'-50px'}} className='d-flex justify-content-center'>Test your Knowledge</h2>
         <form onSubmit={handlesubmit}>
            <TextField className='text-name' value={name} style={{marginLeft:'35%',marginTop:'30%'}}
                 helperText="Please enter your name"
                 id="demo-helper-text-misaligned"
                 label="Name"
                 onChange={e=>setName(e.target.value)}
              />
              <Button id='name-btn' type='submit' variant="contained" size="medium">
              Start the game
            </Button>
         </form>
        </div>
      </div>
    </div>
  )
}

export default Loginpage
