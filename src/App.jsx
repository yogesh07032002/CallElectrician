import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { PricingAll } from "./components/PricingAll";
import { Register } from "./pages/Register";
import { Services } from "./pages/Services";

const App=()=>{
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/price" element={<PricingAll/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App;