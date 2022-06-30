import React from 'react'
import {Form} from './Form'
import {Input} from './Input'
import {Footer} from './Footer'
import { useState } from 'react'

export const Todolist = () => {
    const [actvieDo,setActvieDo]=useState(['Clean up bedroom', 'Buy some milk','Jogging','Learn React','Doing Excercises'])
    const [acticePlus,setActive]=useState('')
    const [actWill,setActWill] = useState ([...actvieDo])
    const [count,setCount]=useState(actWill.length)
    console.log(actWill)
  return (
    < div className='wrapper'>
    <Input setAct={setActive} setactDo={setActvieDo} actPlus={acticePlus} setCou={setCount} actWil={actWill} setActWi={setActWill}/>
    <Form act ={actvieDo} setActWi={setActWill} setCou={setCount} actWil={actWill}/>
    <Footer cou={count}/>
    </ div>
  )
}
