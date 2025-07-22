import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import NavBar from "./components/navbar/NavBar";
import AboutPage from "./components/about/AboutPage";
import ContactUs from "./components/contact/ContactUs";
const Section = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Example routes - create these components for your pages */}
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Section;
