import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/home";
import NavBarComponents from "../components/NavBarComponents/NavBarComponents"
import Category from "../pages/Category";
import Item from "../pages/Item";


const MainRoutes = () => {
    return (
       <Router>
        <NavBarComponents />
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/category/:categoryId" element={<Category/>}/>
         <Route path="/Item/:id" element={<Item/>}/>
        </Routes>
       </Router>
    );
}
export default MainRoutes; 