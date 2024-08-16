import {Home} from "../pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Products } from "../pages/Products";
import { SkalekLayaout } from "../layaout/SkalekLayaout";



export const AppRouter = () => {
  return (
      <Routes> 
          <Route path="/products" element={ <Products /> } />
          <Route path="/" element={ <Home /> } />
          <Route path="/" element={<Navigate to="/" />}/>
 
      </Routes>
    
  )
}

