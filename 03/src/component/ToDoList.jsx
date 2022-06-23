import React, { useState } from 'react'

export const ToDoList = () => {
    let [count,setCount] = useState(2)
  return (
    <div className='trafficsigns'>
        <button className='btn' onClick={function(e){
            
              setCount((prev)=>{
                if(prev===3){
                  prev = 0
                }
                return ++prev
              })
          
           console.log(count)
        }}>Next</button>
      
        <div className='input-radio'>
        
            <div className={`color white ${count ===1 && 'red' }`}></div>
            <div className={`color white ${count ===2 && 'yellow' }`}></div>
            <div className={`color white ${count ===3 && 'green' }`}></div>
          
        </div>
    </div>
    
  )
}
