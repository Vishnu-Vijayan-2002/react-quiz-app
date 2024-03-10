import React from 'react'

function Result() {
    const result=sessionStorage.getItem("value")
    const ouruser=sessionStorage.getItem('key')
  return (
    <div style={{marginTop:'25%'}} id='quiz-container' className='container '>
       <h3 className='text-center'>{ouruser} your Score is : {result}</h3>
    </div>
  )
}

export default Result
