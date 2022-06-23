import React, { useState } from 'react'

export const ToDoList = () => {
    let [count,setCount] = useState(2)
  return (
    <div className='trafficsigns'>
        <button className='btn' onClick={function(e){
              if (count >3){
                count = 1
              }
              setCount(count+1)
           let m = e.currentTarget.parentNode.querySelector('.input-radio')
              if(count!==1){
                m.querySelector('.red').classList.add('back-none')
              }
              else{
                m.querySelector('.red').classList.remove('back-none')
              }
              if(count!==2){
                m.querySelector('.yellow').classList.add('back-none')
              }
              else{
                m.querySelector('.yellow').classList.remove('back-none')
              }
              if(count!==3){
                m.querySelector('.green').classList.add('back-none')
              }
              else{
                m.querySelector('.green').classList.remove('back-none')
              }
           console.log(count)
        }}>Next</button>
      
        <div className='input-radio'>
        
            <div className={`color red `}></div>
            <div className={`color yellow back-none`}></div>
            <div className='color green back-none'></div>
          
        </div>
    </div>
    
  )
}
