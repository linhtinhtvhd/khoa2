import React from 'react'


export const Input = ({setAct,setactDo,actPlus,setCou,actWil,setActWi}) => {
    let b = (e)=> {
        if(e.keyCode===13 && actPlus){
            setactDo((prev) =>{
                    return [...prev,actPlus]
            })
           
         setCou((prev)=>{
             prev = (actWil.filter(m=>  m)).length + 1
             return prev
         })
         setActWi((prev) =>{
            return [...prev,actPlus]
    })
    }
}
    let a = (e)=> {
        if(e.keyCode===13){
            setAct((prev) =>{
                    return e.target.value
            })
              
    }
    }
  return (
    <input onKeyDown={a} onKeyUp={b}  className='input-plus' type="text" placeholder='Enter your task here ...'/>
  )

}


