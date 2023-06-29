import Navbar from "./navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Registartion from "./authorization/Registation";
import Login from "./authorization/Login";
import Welcome from "./welcome/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {auth} from '../action/user'


function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(auth())
  }, [])

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      {!isAuth &&
        <Routes>
          <Route path="/" Component={Welcome}/>
          <Route path="/registration" Component={Registartion}/>
          <Route path="/login" Component={Login}/>
        </Routes>
      }
    </div>
    </BrowserRouter>
  );
}

export default App;
