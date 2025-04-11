import LoginPage from "./Component/Login/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profilepage from "./Component/Login/Profilepage";
import Products from "./Component/Products/Products";
import Productdetails from "./Component/Products/Productdetails";
import Editpage from "./Component/Products/Editpage";
import Navbar from "./Component/Navbar";
import PrivateRoute from "./Component/Login/PrivateRoute";
import Recipes from "./Component/Recipes/Recipes";
import Recipedetails from "./Component/Recipes/Recipedetails";
import { Signup } from "./Component/Login/Signup";
import Addtocart from "./Component/Addtocart";

// import Counter from './Zustand/Counter';

function App() {
  return (
    <>
      {/* <Counter/> */}
      <BrowserRouter>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />

            <Route element={<PrivateRoute />}>
              <Route path="/products" element={<Products />} />
              <Route path="/profile" element={<Profilepage />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/productdetails/:id" element={<Productdetails />} />
              <Route path="/editpage/:id" element={<Editpage />} />
              <Route path="/recipedetails/:id" element={<Recipedetails />} />
              <Route path="/addtocart" element={<Addtocart />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
