
import LoginPage from './Component/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profilepage from './Component/Profilepage';
import Products from './Component/Products';
import Productdetails from './Component/Productdetails';
import Editpage from './Component/Editpage';
import Navbar from './Component/Navbar';
import PrivateRoute from './Component/PrivateRoute'

// import Counter from './Zustand/Counter';

function App() {
  

  return (
   <>
   {/* <Counter/> */}
    <BrowserRouter>
   <div>
   <Navbar/>
    
   <Routes>
    <Route path='/' element={<LoginPage/> }/>
    <Route path='/login' element={<LoginPage/> }/>

    
    
    
    <Route path='/productdetails/:id' element={<Productdetails/>}/>
    <Route path='/editpage/:id' element={<Editpage/>}/>

    
    <Route element={<PrivateRoute/>}>
    <Route path= '/products' element= {<Products/>}/>
    <Route path= '/profile' element= {<Profilepage/>}/>
    </Route>

    
   </Routes>
   </div>
   </BrowserRouter> 
  
   </>
  )
}

export default App
