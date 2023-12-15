import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NavBarComponents } from "../components";
import { ItemDetailContainer } from "../pages";
import Category from "../pages/Category";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponents />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};