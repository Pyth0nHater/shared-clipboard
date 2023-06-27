import React, { useState } from "react";
import { registration } from "../../action/user";
import Input from "../input/Input";

const Registartion = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    return(
        <div className="login">
            <div className="">email</div>
            <Input value={email} setValue = {setEmail} type="text" />

            <div className="">password</div>
            <Input value={password} setValue = {setPassword} type="password"/>

            <div className="">repeat password</div>
            <Input type="password" value={repeatPassword} setValue = {setRepeatPassword} />

            <button className="sinup" onClick={()=>{
                if(password !== repeatPassword){
                    alert("pass not the same")
                }else{
                    registration(email, password)
                }
            }}>Sing up</button>
        </div>
    )

}

export default Registartion;