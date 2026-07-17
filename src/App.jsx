import { Routes, Route } from "react-router-dom";

// Common Components
import Navbar from "./landing/Navbar";
import Footer from "./landing/Footer";

// Pages
import HomePage from "./landing/Home/HomePage";
import AboutPage from "./landing/About/AboutPage";
import ProductPage from "./landing/Product/ProductPage";
import PricingPage from "./landing/Pricing/PricingPage";
import SupportPage from "./landing/Support/SupportPage";

// Auth
import Login from "./landing/Auth/Login";
import Signup from "./landing/Auth/Signup";

// Not Found
import NotFound from "./landing/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
