import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { colorChange } from './features/theme'

const Color = () => {
    const [color,setColor] = useState('black')
    const dispatch = useDispatch()
  return (
    <>
    <input type='color' onChange={(e)=>setColor(e.target.value)}/>
    <button onClick={()=>dispatch(colorChange(color))}>Color Change</button>
    </>
  )
}

export default Color