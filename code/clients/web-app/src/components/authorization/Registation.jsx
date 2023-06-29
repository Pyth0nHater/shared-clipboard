import React, { useState } from "react";
import { registration } from "../../action/user";
import Input from "../input/Input";
import './authorization.css'

const Registartion = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    return(
        <div className="login">
            <div className="rectangle">
                <div className="gray_rectangle">
                    <div className="circle"></div>
                    <div className="circle2"></div>
                    </div>
            <div className="Email">Email</div>
            <Input value={email} setValue = {setEmail} type="text" className="input1" />

            <div className="Password">Password</div>
            <Input value={password} setValue = {setPassword} type="password" className="input1"/>

            <div className="Repeat_password">Repeat password</div>
            <Input type="password" value={repeatPassword} setValue = {setRepeatPassword} className="input1"/>
            <div>
                <button className="signin" onClick={()=>{
                    if(password !== repeatPassword){
                        alert("pass are not the same")
                    }else{
                        registration(email, password)
                    }
                }}>Sing up</button>
            </div>
        </div>
        </div>
    )

}

export default Registartion;