import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
// import Contact from "./Pages/Contact/Contact";
import ProductsDetails from "./Components/ProductsDetails/ProductsDetails";
import Nouveautés from "./Pages/Nouveautés/Nouveautés";


export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='*' element={<Navigate to="/" />} ></Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/Nouveautés" element={<Nouveautés />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  )
}
