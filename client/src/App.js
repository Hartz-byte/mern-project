import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import MainMenu from "./components/layouts/MainMenu";
import AddProduct from "./pages/AddProduct";
import { ContextFav } from "./store/contextFav";

function App() {
  return (
    <ContextFav>
      <BrowserRouter>
        <MainMenu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/add" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </ContextFav>
  );
}

export default App;
