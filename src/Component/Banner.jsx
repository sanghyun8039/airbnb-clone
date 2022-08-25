import { React, useState } from "react";
import styled from "styled-components";
import { Button, StyledEngineProvider } from "@mui/material";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  height: 60vh;
  position: relative;
  background: url("https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg")
    center center;
`;

const BannerInfo = styled.div`
  background-color: black;
  color: white;
  padding-top: 25vh;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 40px;
  width: 300px;
  h5 {
    margin-top: 10px;
  }
  Button {
    background-color: #ff7779;
    color: white;
    text-transform: inherit;
    margin-top: 20px;
    font-weight: 600;
    &:hover {
      background-color: white;
      color: #ff7779;
    }
  }
`;

const BannerSearch = styled.div`
  display: flex;
  flex-direction: column;
`;

const BannerSearchButton = styled(Button)`
  background-color: white !important;
  font-weight: 900 !important;
  text-transform: inherit !important;
  color: #ff7779 !important;
`;
function Banner() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Wrapper>
      <StyledEngineProvider injectFirst>
        <BannerSearch>
          <BannerSearchButton
            variant="outlined"
            onClick={() => setShowSearch(!showSearch)}
          >
            {showSearch ? "Hide" : "SearchDates"}
          </BannerSearchButton>
          {showSearch && <Search />}
        </BannerSearch>
        <BannerInfo>
          <h1>Get out and stretch your imagination</h1>
          <h5>
            Plan a different kind of getaway to uncover the hidden gems near
            you.
          </h5>
          <Button onClick={() => navigate("/search")} variant="outlined">
            Explore NearBy
          </Button>
        </BannerInfo>
      </StyledEngineProvider>
    </Wrapper>
  );
}

export default Banner;
