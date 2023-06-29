import React from "react";

const Input = (props) =>{
    return(
        <input 
        onChange={(event)=>props.setValue(event.target.value)} 
        value={props.value}
        type={props.type} 
        placeholder={props.placeholder} 
        className={props.className}/>
    )
}

export default Input;