import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import AboutOne from "./pages/AboutOne";
import AboutTwo from "./pages/AboutTwo";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route index element={<AboutOne />} />
          <Route path="two" element={<AboutTwo />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
