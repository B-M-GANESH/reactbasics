// import React from "react";

// class Cars extends React.Component{
//     constructor(){
//         super()
//         this.state={color:"green"}
//     }
//     render(){
//         return(
//             <>
//             <h1>My car color is {this.state.color}</h1>
//             <button onClick={()=>{this.setState({color:'yellow'})}}>Change</button>
//             </>
//         )
//     }
// }
// export default Cars;

import React from "react";

class Cars extends React.Component{
    constructor(){
        super()
        this.state={color:"red",model:"bmw"}
    }
    render(){
        // const {answer}=this.props
        // let {res,des}=answer
        return(
               <>
               <h1>My car color is {this.state.color} and model is {this.state.model} </h1>
               <button onClick={()=>{this.setState((previous)=>{return{...previous,color:"pink"}})}}>Change</button>
               </>
        )
    }
}

export default Cars;