import "./App.css";
import styled from "styled-components";
import HomePage from "./Page/HomePage";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import SearchPage from "./Page/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Wrapper = styled.div`
  margin: 0;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </Wrapper>
  );
}

export default App;
