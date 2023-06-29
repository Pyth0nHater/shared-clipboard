import React, { useState } from "react";
import Input from "../input/Input";
import {useDispatch} from 'react-redux'
import { login } from "../../action/user";


const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    return(
        <div className="login">
            <div className="rectangle">
                <div className="gray_rectangle">
                    <div className="circle"></div>
                    <div className="circle2"></div>
                    </div>
                <div className="email">Email</div>
                <Input value={email} setValue = {setEmail} type="text" className="input"/>

                <div className="password">Password</div>
                <Input value={password} setValue = {setPassword} type="password" className="input"/>

                <div>
                    <button className="signin" onClick={() => dispatch(login(email, password))}>Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Login;