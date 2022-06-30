import React from 'react'
import { useState } from 'react'

export const Input = ({label,type,error}) => {
  const [isPri,setIsSpri] = useState(true)
  const [isVlu,setVal] = useState(false)
  const test =(value)=>{
      if(type=== 'email')
      return value.length <5 ? undefined : value
      if(type=== 'password')
      return value.length <4 ? undefined : value
  }
 
  const setHandle = (e)=> {
   let value = e.target.value
    setIsSpri(test(value))
  }
  const setValue = (e)=>{
    let value = e.target.value
    setVal(()=>{
      return value ? true : false
    })
  }
  return (<div className='input-form'>
  <div className={`input ${isPri || 'input-err'}`}>
        <input onBlur={setHandle} onInput={setValue} onChange={setHandle} 
         type={type} id={type}/>
        <label className={`${isVlu && 'value'}`} htmlFor={type}>{label}</label> 
    </div>
    <div>
        <span  className={`error ${isPri || 'block'}`}>{error}</span>
        {console.log(isPri)}
    </div>
    </div>
  )
}
