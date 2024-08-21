import { Home } from "../pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Products } from "../pages/Products";
import { FiltersProvider } from "../context/FiltersProvider";



export const AppRouter = () => {
  return (
    <FiltersProvider>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </FiltersProvider>

  );
};

