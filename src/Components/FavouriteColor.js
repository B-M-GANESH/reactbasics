import { useState } from "react";

function FavouriteColor(answer){
  let {res,des}=answer
  let [color,setColor]=useState('green')
  return<>
      <h1>My favourite color is {color}</h1>
      <button onClick={()=>{setColor('blue')}}>change</button>  
      </>
}

export default FavouriteColor;

