import Car from './Car'
import Apple from './Apple';

function Garage(){
    const info = {brands:'bolero',colors:'yellow'}
    const appleinfo = {type:'fuji',color:'red'}
  
    return(
      <div>
        <h1>HELLO GARAGE</h1>
        <Car info={info}/>
        <Apple appleinfo={appleinfo}/>
       
      </div>
    )
  }
  export default Garage;