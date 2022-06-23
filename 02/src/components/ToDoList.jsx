import React from 'react'
import {Footer} from './Footer'
import {Input} from './Input'
import {ListItem} from './ListItem'



export const ToDoList = () => {
  return (
    <div className='wrapper'>
        <Input/>
        <ListItem/>
        <Footer/>
    </div>
  )
}
