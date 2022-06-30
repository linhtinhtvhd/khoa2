import React from 'react'


export const Iteminput = ({tittle,setactW,number,setCo,actWi}) => {
  const a = (e) =>{
    setactW(prev=>{
      delete prev[number]
      return prev
    })
    setCo(prev=>{
      return (actWi.filter(m=>  m)).length
    })
  }
  return (
    <div className='iteminput' onClick={a}>
    <input type="radio" id={tittle} />
    <label htmlFor={tittle}>{tittle}</label>
    </div>
  )
}
