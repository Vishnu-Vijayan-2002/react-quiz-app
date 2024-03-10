import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './main.css'
import { QuizDatas } from './Data/QuizDatas';
import { useRef } from 'react';
function MainPage() {
  // http://localhost:5173/result
  
  const [index,setIndex] = useState(1);
  const [question,setQuestion]=useState(QuizDatas[index]);
  const [lock,setLock]=useState(false)
  const [score,setscore]=useState(0)
  const [result,setResult]=useState(false)
  const option1=useRef(null)
  const option2=useRef(null)
  const option3=useRef(null)
  const option4=useRef(null)

  const option_arry=[option1,option2,option3,option4];

  const ouruser=sessionStorage.getItem('key')
  
  const checkAnsr=(e,answer)=>{
   if(lock === false)
   {
      if(question.answer===answer){
        e.target.classList.add("correct")
        setLock(true)
        setscore(prev=>prev+1)
    }else{
      e.target.classList.add("wrong")
      setLock(true)
      option_arry[question.answer-1].current.classList.add("correct")
      
    }
   }
  }
  const next =()=>{
   setIndex(index+1);
    setQuestion(QuizDatas[index+1])
    setLock(false);
    if(index===QuizDatas.length-1){
      window.location.href=("http://localhost:5173/result")
      sessionStorage.setItem('value',score)
    }
    
  }
  console.log(score);
  return (
      <div id='quiz-container' className='container'>
        <h1>Quiz App</h1>
        <div style={{color:'green',fontSize:'20px'}} className='user text-center'>Hi Welcom {ouruser}</div>
        <hr />
        <h2>{index}.{question.question}</h2>
        <ul >
          <li className='option-btn' ref={option1} onClick={(e)=>{checkAnsr(e,1)}}>{question.option1}</li>
          <li className='option-btn' ref={option2} onClick={(e)=>{checkAnsr(e,2)}}>{question.option2}</li>
          <li className='option-btn' ref={option3} onClick={(e)=>{checkAnsr(e,3)}}>{question.option3}</li>
          <li className='option-btn' ref={option4} onClick={(e)=>{checkAnsr(e,4)}}>{question.option4}</li>
        </ul>
        <div className='d-flex justify-content-center'>
          <Button onClick={next}  variant="contained" disableElevation>
          Next
        </Button>
        </div>
      <div className='index d-flex justify-content-center'>{index} of {QuizDatas.length} question</div>
      </div>
  )
}

export default MainPage
