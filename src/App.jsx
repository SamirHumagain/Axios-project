
import LoginPage from './Component/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Profilepage from './Component/Profilepage';
import Products from './Component/Products';
import Productdetails from './Component/Productdetails';
import Editpage from './Component/Editpage';
import Navbar from './Component/Navbar';

function App() {

  return (
   <>
 
   <BrowserRouter>
   <div>
   <Navbar/>
    
   <Routes>
    <Route path='/' element={<LoginPage/> }/>
    <Route path= '/profile' element= {<Profilepage/>}/>
    <Route path ='/products' element={<Products/>}/>
    <Route path='/productdetails/:id' element={<Productdetails/>}/>
    <Route path='/editpage/:id' element={<Editpage/>}/>
   </Routes>
   </div>
   </BrowserRouter>
  
   </>
  )
}

export default App
