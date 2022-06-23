import React from 'react'

export const Item = ({title}) => {
  return (
    <div className='item'>
        <input type="radio" id={title}/>
        <label htmlFor={title}>{title}</label>
    </div>
  )
}
