import React from "react";

function Car({info}){
    const {brands,colors} = info
    const text = `Hi,Im a ${colors} ${brands} car`
    return(
      // <h1>Hi I am a {colors} {brands}</h1>
      <h2>{text}</h2>
    )
  }
export default Car;  