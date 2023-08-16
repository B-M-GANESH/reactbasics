import React from 'react'
import  Axios  from 'axios';

function Api() {
    Axios.get('https://fakestoreapi.com/products').then((res)=>{
        console.log(res.data);
    })  
  return (
    <div>

    </div>
  )
}

export default Api