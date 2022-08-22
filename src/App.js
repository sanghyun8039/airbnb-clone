import "./App.css";
import styled from "styled-components";
import HomePage from "./Page/HomePage";
import Header from "./Component/Header";
const Wrapper = styled.div`
  margin: 0;
`;

function App() {
  return (
    <Wrapper>
      <Header></Header>
      <HomePage></HomePage>
    </Wrapper>
  );
}

export default App;
