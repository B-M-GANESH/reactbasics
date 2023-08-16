import React, { useState } from 'react'
import { login,logout } from './features/user'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


const Login = () => {
  const user = useSelector(state=>state.user.value)
  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const [email,setEmail] = useState('')
  const dispatch = useDispatch()
  return (
    <>
    {
      !user.name && <div>
        <label>Name:<input type='text' onChange={(e)=>setName(e.target.value)} /> </label><br />
    <label>Age:<input type='text' onChange={(e)=>setAge(e.target.value)} /></label><br />
    <label>Email:<input type='mail' onChange={(e)=>setEmail(e.target.value)} /></label><br />
      </div>
    }
    {!user.name?
    <button onClick={()=>{dispatch(login({name,age,email}))}}>Login</button>:
    <button onClick={()=>dispatch(logout())}>Logout</button>
    }
    </>
  )
}

export default Login