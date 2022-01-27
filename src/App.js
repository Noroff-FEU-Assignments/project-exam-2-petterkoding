import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Accommodations from "./pages/Accommodations";
import Details from "./pages/Details";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import Host from "./pages/Host";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Nav />
        <Container>
          <Routes>
            <Route path="/" exact="true" element={<Home />} />
            <Route path="/accommodations" element={<Accommodations />} />
            <Route
              path="/accommodations/:id"
              exact="true"
              element={<Details />}
            />
            <Route path="/host" element={<Host />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

const Container = styled.div`
  max-width: 92rem;
  margin: 0 auto;
  padding: 0 10px;
`;

export default App;
