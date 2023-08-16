import React from "react";

class Apple extends React.Component{
    render(){
        const {appleinfo}=this.props
        const {type,color}=appleinfo
        return(
            <h2>I am {color} {type} Apple</h2>
        
        )
    }

}
export default Apple; 