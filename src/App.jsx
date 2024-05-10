import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import ProductsDetails from "./Components/ProductsDetails/ProductsDetails";


export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
