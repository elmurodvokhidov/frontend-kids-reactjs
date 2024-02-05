import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Navbar } from "./pages/Navbar";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-[100vh] bg-slate-400">
        {/* Navbar Component */}
        <Navbar />

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer Component */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;