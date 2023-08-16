import { useState } from "react";

function Bala(){
    // const [brand,setBrand]=useState('bolero')
    // const [color,setColor]=useState('black')
    // const [model,setModel]=useState('2022')
    // const [expire,setExpire]=useState('2040')
const [Scooter,setScooter]= useState({
    brand:'scorpio',
    color:'blue',
    model:'2022',
    expire:'2041'
}
)

function Changebrand(){
    setScooter( previousState => {
        return {...previousState,brand:'bloero'}

    })
}

    return(
          <>
          <h1>Welcome</h1>
          <p>brand:{Scooter.color}</p>
          <p>color:{Scooter.brand}</p>
          <p>model:{Scooter.model}</p>
          <p>expire:{Scooter.expire}</p>
          <button onClick={Changebrand}>Changebrand</button><br /><br />

          </>
    )
}
export default Bala;