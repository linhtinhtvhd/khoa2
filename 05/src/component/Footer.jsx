import React from 'react'

export const Footer = ({cou}) => {
  return (
    <div className='footer'>
        <p className='footer-left'>
            <span className='numberDo'>{cou}</span>
            <p>tasks left!</p>
        </p>
        <p>MinX todolist</p>
    </div>
  )
}
