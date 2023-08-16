// import { useState } from "react";

// function List(){
//     const[List,setList]=useState([])
//   const[Count,setCount]=useState(1)
//   function addItem(){
//     const itemName='item'+Count
//     setList(previousState =>{return [...previousState,itemName]})
//     setCount(previousState =>{ return previousState,previousState+1})
//   }
//     return<>
//           <h1>Lists</h1>
//           <button onClick={addItem}>Add</button>
//           <ul>{
//             List.map((el,index) =>  <li key={index}>{el}</li>)
//             }
           
//           </ul>
//           </>
// }

// export default List;

import { useState } from "react";

function List(){
    const [List,setList]=useState([])
    const[Count,setCount]=useState(1)
   
    function addItem(){
        const itemName="item"+Count
        setList(previousState =>{return [...previousState,itemName]})
        setCount(previousState =>{return previousState+1}) 
    }
    return<>
          <h1>Lists</h1>
          <button onClick={addItem}>Add</button>
          <ul>{
               List.map(el => <li>{el}</li>)
               }
            
          </ul>
          </>
}

export default List;