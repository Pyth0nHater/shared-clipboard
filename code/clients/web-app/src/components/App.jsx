import Navbar from "./navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Registartion from "./authorization/Registation";
import Login from "./authorization/Login";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/registration" Component={Registartion}/>
        <Route path="/login" Component={Login}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
