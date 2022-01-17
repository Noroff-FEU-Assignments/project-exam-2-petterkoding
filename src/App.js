// components

import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Accommodations from "./pages/Accommodations";
import Details from "./pages/Details";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <Container>
        <Routes>
          <Route path="/" exact="true" element={<Home />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/:id" exact="true" element={<Details />} />
          <Route path="/login" exact="true" element={<Login />} />
          <Route path="/admin" exact="true" element={<AdminPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  max-width: 92rem;
  margin: 0 auto;
  padding: 0 10px;
`;

export default App;
