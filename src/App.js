// components

import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Accommodations from "./pages/Accommodations";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
