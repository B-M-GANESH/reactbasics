// 

import { useEffect,useState } from "react";

function Timer(){
    const [count,setCount]=useState(1)
    useEffect(()=>{
        console.log('rendered');
        // setTimeout(()=>{
        //     setCount((previous)=>{return previous+1})
        // },500)
        greater()
    },[count])
    function greater(){
        if(count>10)
        setCount(1)
    }
   function checkUpdate(){
    setCount((previousState)=>{return previousState+1})
   }
    return<>
        <h1>I have rendered {count} times</h1>
        <button onClick={checkUpdate}>ADD</button>  
        </>
}
export default Timer;


