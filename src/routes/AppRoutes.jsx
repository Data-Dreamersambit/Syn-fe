import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import BlogList from "../pages/BlogList";
import Faq from "../pages/Faq";
import Apply from "../pages/Apply";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/bloglist" element={<BlogList />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/apply" element={<Apply />} />
       
    </Routes>
  );
};

export default AppRoutes;
