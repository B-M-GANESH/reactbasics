import { useEffect, useState } from "react"
function Timers(){
    const [Count,setCount]=useState(1)

    //    useEffect(()=>{
    //     const teimerid=setTimeout(()=>{
    //         console.log("rendered");
    //         setCount(e=>{return e+1})
    //     })
    //     // setTimeout(setCount(e=>{return e+1},2000))
    //     clearTimeout(teimerid)
    //    })

    useEffect(() => {

        const teimerid=setTimeout(()=>{
                    console.log("rendered");
                    setCount(e=>{return e+1})
        },3000)
        return () => {
            console.log("return");
        clearTimeout(teimerid)
            
        };
    },[Count]);
  
    console.log("....");
    function addItem(){
          setCount(e=>{return e+1})

    }
  
    return<>
          <h1>I have rendered {Count} times</h1>
          <p>Name:</p>
          <button onClick={addItem}>ADD</button>
          </>
}
export default Timers;