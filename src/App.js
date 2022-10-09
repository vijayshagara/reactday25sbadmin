import React from "react"
import {Routes,Route,BrowserRouter} from'react-router-dom';
import LogIn from "./component/login";
import Dashboard from "./component/dashboard";
import Cards from "./component/cards";
import Buttons from "./component/Buttons";
import Colour from "./component/Colour";
import Border from "./component/Border";
import Animation from "./component/Animation";
import Other from "./component/Other";
import Register from "./component/Register";
import ForgetPass from "./component/Forgetpass";
import Error from "./component/Error";
import Blank from "./component/Blank";
import Chart from "./component/Chart";
import Table from "./component/Table";
import"./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css";




function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<LogIn/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/cards' element={<Cards/>}/>
  <Route path='/buttons' element={<Buttons/>}/>
  <Route path='/colors' element={<Colour/>}/>
  <Route path='/border' element={<Border/>}/>
  <Route path='/animation' element={<Animation/>}/>
  <Route path='/other' element={<Other/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/forgetpass' element={<ForgetPass/>}/>
  <Route path='/error' element={<Error/>}/>
  <Route path='/blank' element={<Blank/>}/>
  <Route path='/chart' element={<Chart/>}/>
  <Route path='/table' element={<Table/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
