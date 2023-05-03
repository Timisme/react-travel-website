import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </>
  );
};

export default App;
