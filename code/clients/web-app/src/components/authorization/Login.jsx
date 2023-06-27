import React, { useState } from "react";
import Input from "../input/Input";
import {useDispatch} from 'react-redux'
import { login } from "../../action/user";


const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    return(
        <div className="registartion">
            <div className="">email</div>
            <Input value={email} setValue = {setEmail} type="text" />

            <div className="">password</div>
            <Input value={password} setValue = {setPassword} type="password"/>

            <button className="sinin" onClick={() => dispatch(login(email, password))}>Sing in</button>
        </div>
    )
}

export default Login;