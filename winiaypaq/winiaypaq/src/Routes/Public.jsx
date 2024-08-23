import { Route, Routes } from 'react-router-dom';

import Home from "../Pages/Home";
import Moment from "../Pages/Moment";
import Login from "../Pages/Login";
import State from "../Pages/State";
import Test from "../Pages/Test";
import History from '../Pages/History';

function Public(){
    return (
       
              <Routes>
                <Route path="/" element={<Home />}/>  
                <Route path="/:user" element={<Home />}/>                    
                <Route path="/login" element={<Login />}/>
                <Route path="/state" element={<State />}/>           
                <Route path="/moment" element={<Moment />}/>
                <Route path="/test" element={<Test />}/>
                <Route path="/history" element={<History />}/>
                <Route path="*" element={<Login/>}/>
            </Routes>
      
    )
}
export default Public