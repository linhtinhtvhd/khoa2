import React from 'react'
import { Iteminput } from './Iteminput'

export const Form = ({act,setActWi,setCou,actWil}) => {
    
   
    return (
    <div className='form'>
    {
        act.map((el,index)=> <Iteminput key={index} tittle={el} setactW={setActWi} number={index} setCo={setCou} actWi={actWil}/>
        )
    }
    </div>
  )
}
