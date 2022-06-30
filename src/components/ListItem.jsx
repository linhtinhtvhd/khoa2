import React from 'react'
import {Item} from './Item'

export const ListItem = () => {
    const arr = ['Clear up bedroom','Buy some milk','Jogging','Learn React','Doing exercises']
  return (
    <div>
        {arr.map((el,index) => {
            return <Item key={index} title= {el}/>
        })}
    </div>
  )
}

