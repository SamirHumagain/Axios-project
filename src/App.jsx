
import LoginPage from './Component/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profilepage from './Component/Profilepage';
import Products from './Component/Products';
import Productdetails from './Component/Productdetails';
import Editpage from './Component/Editpage';
import Navbar from './Component/Navbar';
import PrivateRoute from './Component/PrivateRoute'
import Recipes from './Component/Recipes';
import recipedetails from './Component/Recipedetails';
import Recipedetails from './Component/Recipedetails';

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
    <Route path='/recipedetails/:id' element={<Recipedetails/>}/>
    

  

    
    <Route element={<PrivateRoute/>}>
    <Route path= '/products' element= {<Products/>}/>
    <Route path= '/profile' element= {<Profilepage/>}/>
    <Route path= '/recipes' element= {<Recipes/>}/>
    <Route path='/recipedetails' element={<Recipedetails/>}/>
    </Route>

    
   </Routes>
   </div>
   </BrowserRouter> 
  
   </>
  )
}

export default App
