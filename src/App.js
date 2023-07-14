
import Dashboard from "./Page/Dashboard";
import Tranning from "./Page/Tranning";
import User from "./Page/User";

import {Routes, Route, BrowserRouter} from "react-router-dom";



function App() {
  return <>
     
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Dashboard/>}></Route>
      <Route path='Tranning' exact element={<Tranning/>}></Route>
      <Route path='User' exact element={<User/>}></Route>

     </Routes>
    
    </BrowserRouter>
    
     </>

}

export default App;
